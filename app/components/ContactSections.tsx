import type { ChangeEvent, FocusEvent, FormEvent } from "react";
import { CONTACT_LIMITS, type ContactFieldErrors } from "../contact-validation";
import { EditablePlaceholder } from "./PortfolioShared";

export type ContactFormStatus = {
  type: "idle" | "success" | "error";
  message: string;
};

export function ContactSection({
  fieldErrors,
  formStatus,
  submitting,
  onFieldBlur,
  onFieldChange,
  onSubmit,
}: {
  fieldErrors: ContactFieldErrors;
  formStatus: ContactFormStatus;
  submitting: boolean;
  onFieldBlur: (event: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onFieldChange: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
}) {
  return (
    <section className="contact section" id="contact" data-od-id="contact-section">
      <div className="contact-intro">
        <p className="eyebrow">10 · Contact</p>
        <h2>Let’s make a complex problem feel clear enough to act on.</h2>
        <p>For thoughtful conversations about applied AI, responsible systems, research, consulting, or a project worth exploring.</p>
        <div className="contact-details">
          <a href="mailto:Shahrzad.aminranjbar91@gmail.com">Shahrzad.aminranjbar91@gmail.com</a>
          <span>Toronto, Ontario</span>
          <a href="https://www.linkedin.com/in/shahrzad-aminranjbar/" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://github.com/shaahrzad91" target="_blank" rel="noreferrer">GitHub</a>
        </div>
      </div>
      <form className="contact-form" onSubmit={onSubmit} noValidate data-od-id="contact-form">
        <label>
          Name
          <input
            name="name"
            type="text"
            autoComplete="name"
            required
            minLength={CONTACT_LIMITS.name.min}
            maxLength={CONTACT_LIMITS.name.max}
            onBlur={onFieldBlur}
            onChange={onFieldChange}
            aria-invalid={Boolean(fieldErrors.name)}
            aria-describedby={fieldErrors.name ? "contact-name-error" : undefined}
            aria-errormessage={fieldErrors.name ? "contact-name-error" : undefined}
            disabled={submitting}
          />
          {fieldErrors.name && <span className="field-error" id="contact-name-error">{fieldErrors.name}</span>}
        </label>
        <label>
          Email
          <input
            name="email"
            type="email"
            inputMode="email"
            autoComplete="email"
            required
            maxLength={CONTACT_LIMITS.email.max}
            onBlur={onFieldBlur}
            onChange={onFieldChange}
            aria-invalid={Boolean(fieldErrors.email)}
            aria-describedby={fieldErrors.email ? "contact-email-error" : undefined}
            aria-errormessage={fieldErrors.email ? "contact-email-error" : undefined}
            disabled={submitting}
          />
          {fieldErrors.email && <span className="field-error" id="contact-email-error">{fieldErrors.email}</span>}
        </label>
        <label>
          Message
          <textarea
            name="message"
            rows={5}
            required
            minLength={CONTACT_LIMITS.message.min}
            maxLength={CONTACT_LIMITS.message.max}
            onBlur={onFieldBlur}
            onChange={onFieldChange}
            aria-invalid={Boolean(fieldErrors.message)}
            aria-describedby={fieldErrors.message ? "contact-message-error" : undefined}
            aria-errormessage={fieldErrors.message ? "contact-message-error" : undefined}
            disabled={submitting}
          />
          {fieldErrors.message && <span className="field-error" id="contact-message-error">{fieldErrors.message}</span>}
        </label>
        <button className="button button-dark" type="submit" disabled={submitting}>
          {submitting ? "Sending…" : "Write to Shahrzad"} <span aria-hidden="true">↗</span>
        </button>
        <p
          className="form-status"
          data-status={formStatus.type}
          role={formStatus.type === "error" ? "alert" : "status"}
          aria-live="polite"
        >
          {formStatus.message}
        </p>
      </form>
    </section>
  );
}

export function VoiceAgentSection() {
  return (
    <section className="voice-agent section" data-od-id="voice-agent-placeholder">
      <div className="voice-orb" aria-hidden="true"><i /><i /><i /></div>
      <div>
        <p className="eyebrow">Coming next · AI voice agent</p>
        <h2>Ask my portfolio a question.</h2>
        <p>A future conversational guide will help visitors explore my experience and projects in their own words.</p>
      </div>
      <div className="voice-placeholder"><EditablePlaceholder>Add voice-agent embed or launch link.</EditablePlaceholder></div>
    </section>
  );
}

export function PortfolioFooter() {
  return (
    <footer className="site-footer" data-od-id="site-footer">
      <p className="footer-name">Shahrzad<br />Amin Ranjbar</p>
      <p>Senior Data Scientist<br />AI/ML Engineer<br />Generative AI Specialist</p>
      <nav aria-label="Footer navigation">
        <a href="#about">About</a><a href="#experience">Experience</a><a href="#projects">Projects</a><a href="#contact">Contact</a>
      </nav>
      <div className="footer-meta"><span>Toronto · Canada</span><a href="#home">Back to top ↑</a></div>
    </footer>
  );
}
