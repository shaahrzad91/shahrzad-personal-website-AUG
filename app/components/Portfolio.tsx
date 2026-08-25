"use client";

import { ChangeEvent, FocusEvent, FormEvent, useEffect, useState } from "react";
import {
  ContactSection,
  type ContactFormStatus,
  PortfolioFooter,
  VoiceAgentSection,
} from "./ContactSections";
import {
  CertificationsSection,
  EducationSection,
  InterestsSection,
  PhilosophySection,
  SkillsSection,
} from "./ExpertiseSections";
import { HeroSection } from "./HeroSection";
import {
  type ContactFieldErrors,
  hasContactErrors,
  isContactField,
  validateContactField,
  validateContactInput,
} from "../contact-validation";
import { type Project } from "./portfolio-data";
import { PortfolioHeader } from "./PortfolioHeader";
import { ProjectDialog } from "./ProjectDialog";
import { AboutSection, ExperienceSection, JourneySection, ProjectsSection } from "./StorySections";

export function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [formStatus, setFormStatus] = useState<ContactFormStatus>({ type: "idle", message: "" });
  const [fieldErrors, setFieldErrors] = useState<ContactFieldErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(total > 0 ? (window.scrollY / total) * 100 : 0);
    };
    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    return () => window.removeEventListener("scroll", updateProgress);
  }, []);

  const setContactFieldError = (field: keyof ContactFieldErrors, error?: string) => {
    setFieldErrors((currentErrors) => {
      const nextErrors = { ...currentErrors };
      if (error) nextErrors[field] = error;
      else delete nextErrors[field];
      return nextErrors;
    });
  };

  const handleContactFieldBlur = (event: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.currentTarget;
    if (!isContactField(name)) return;
    setContactFieldError(name, validateContactField(name, value));
  };

  const handleContactFieldChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.currentTarget;
    if (!isContactField(name)) return;

    if (fieldErrors[name]) {
      setContactFieldError(name, validateContactField(name, value));
    }
    if (formStatus.type === "error") {
      setFormStatus({ type: "idle", message: "" });
    }
  };

  const handleContact = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (submitting) return;

    const formElement = event.currentTarget;
    const form = new FormData(formElement);
    const { data, errors } = validateContactInput({
      name: form.get("name"),
      email: form.get("email"),
      message: form.get("message"),
    });

    setFieldErrors(errors);
    if (hasContactErrors(errors)) {
      setFormStatus({ type: "error", message: "Please correct the highlighted fields." });
      return;
    }

    setSubmitting(true);
    setFormStatus({ type: "idle", message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await response.json().catch(() => null) as {
        message?: string;
        fieldErrors?: ContactFieldErrors;
      } | null;

      if (!response.ok) {
        if (result?.fieldErrors) setFieldErrors(result.fieldErrors);
        throw new Error(result?.message || "Your message could not be sent. Please try again.");
      }

      formElement.reset();
      setFieldErrors({});
      setFormStatus({
        type: "success",
        message: result?.message || "Thanks — your message has been sent.",
      });
    } catch (error) {
      setFormStatus({
        type: "error",
        message: error instanceof Error
          ? error.message
          : "Your message could not be sent. Please try again.",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <div className="scroll-progress" aria-hidden="true" style={{ width: `${progress}%` }} />
      <PortfolioHeader
        menuOpen={menuOpen}
        onMenuClose={() => setMenuOpen(false)}
        onMenuToggle={() => setMenuOpen(!menuOpen)}
      />

      <main id="main-content">
        <HeroSection />
        <AboutSection />
        <JourneySection />
        <ExperienceSection />
        <ProjectsSection onProjectOpen={setActiveProject} />
        <SkillsSection />
        <EducationSection />
        <CertificationsSection />
        <PhilosophySection />
        <InterestsSection />
        <ContactSection
          fieldErrors={fieldErrors}
          formStatus={formStatus}
          submitting={submitting}
          onFieldBlur={handleContactFieldBlur}
          onFieldChange={handleContactFieldChange}
          onSubmit={handleContact}
        />
        <VoiceAgentSection />
      </main>

      <PortfolioFooter />
      {activeProject && <ProjectDialog project={activeProject} onClose={() => setActiveProject(null)} />}
    </>
  );
}
