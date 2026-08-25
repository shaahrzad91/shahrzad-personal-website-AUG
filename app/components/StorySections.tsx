import Image from "next/image";
import { experiences, journey, projects, type Project } from "./portfolio-data";
import { EditablePlaceholder, SectionHeading } from "./PortfolioShared";

export function AboutSection() {
  return (
    <section className="about section" id="about" data-od-id="about-section">
      <SectionHeading eyebrow="01 · About" title="Curious about the system. Grounded in the human context." />
      <div className="about-grid">
        <p className="about-lead">
          I enjoy AI because it asks for two kinds of thinking at once: the precision to understand a complex technical system, and the empathy to understand what a person actually needs from it.
        </p>
        <div className="about-copy">
          <p>
            My work moves between research, engineering, and business. I like taking a problem that feels ambiguous - fragmented data, rules hidden in documents, a model people cannot yet trust - and making it legible enough to build, test, explain, and improve together.
          </p>
          <p>
            Collaboration is part of that process, not a handoff at the end. I work to give technical teams, stakeholders, and decision-makers a shared language for what the system is doing, why it matters, and where its limits are.
          </p>
        </div>
      </div>
      <figure className="editorial-image editorial-image-about">
        <Image
          src="/responsible-ai-research.png"
          alt="Editorial visualization of responsible AI research, validation, and trustworthy systems"
          fill
          sizes="(max-width: 820px) calc(100vw - 40px), 1180px"
        />
        <figcaption>Responsible AI · Research, validation, and human context</figcaption>
      </figure>
      <div className="principle-strip" aria-label="Working principles">
        <span>Useful before impressive</span><span>Explainable by design</span><span>Built for real decisions</span>
      </div>
    </section>
  );
}

export function JourneySection() {
  return (
    <section className="journey section section-blue" id="journey" data-od-id="journey-section">
      <SectionHeading
        eyebrow="02 · My journey"
        title="A path from engineering foundations to enterprise AI."
        intro="Each chapter widened the frame: first the model, then the system, then the decision and the people around it."
      />
      <ol className="timeline">
        {journey.map((item, index) => (
          <li key={item.title} data-od-id={`journey-step-${index + 1}`}>
            <div className="timeline-index">0{index + 1}</div>
            <div className="timeline-date">{item.date}</div>
            <div className="timeline-story">
              <h3>{item.title}</h3><p>{item.copy}</p>
              {item.note && <EditablePlaceholder>{item.note}</EditablePlaceholder>}
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}

export function ExperienceSection() {
  return (
    <section className="experience section" id="experience" data-od-id="experience-section">
      <SectionHeading
        eyebrow="03 · Experience"
        title="The work, told in context."
        intro="Not a list of duties - a record of the problems, systems, and outcomes that shaped each role."
      />
      <div className="experience-list">
        {experiences.map((experience, index) => (
          <article className="experience-row" key={experience.company} data-od-id={`experience-${index + 1}`}>
            <div className="experience-meta">
              <p className="experience-number">0{index + 1}</p>
              <p className="experience-date">{experience.date}</p>
            </div>
            <div className="experience-story">
              <p className="experience-company">{experience.company}</p>
              <h3>{experience.role}</h3>
              <p>{experience.story}</p>
              <div className="tag-row">{experience.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export function ProjectsSection({ onProjectOpen }: { onProjectOpen: (project: Project) => void }) {
  return (
    <section className="projects section" id="projects" data-od-id="projects-section">
      <SectionHeading
        eyebrow="04 · Featured projects"
        title="Eight systems. Eight different ways to make intelligence useful."
        intro="Open any case study for the verified challenge, role, architecture, technologies, and impact. Missing personal reflections remain clearly editable."
      />
      <figure className="editorial-image editorial-image-projects">
        <Image
          src="/ai-decision-system.png"
          alt="Editorial visualization of complex data becoming clear AI-assisted decisions"
          fill
          sizes="(max-width: 820px) calc(100vw - 40px), 1180px"
        />
        <figcaption>From complex signals to decisions people can use</figcaption>
      </figure>
      <div className="project-grid">
        {projects.map((project, index) => (
          <button
            className={`project-card ${index === 0 || index === 4 ? "project-card-wide" : ""}`}
            key={project.id}
            onClick={() => onProjectOpen(project)}
            data-od-id={`project-card-${project.id}`}
            aria-label={`Open ${project.title} case study`}
          >
            <span className="project-topline"><span>{project.context}</span><span>0{index + 1}</span></span>
            <span className="project-kind">{project.kind}</span>
            <strong>{project.title}</strong>
            <span className="project-challenge">{project.challenge}</span>
            <span className="project-open">Read case study <b aria-hidden="true">↗</b></span>
          </button>
        ))}
      </div>
    </section>
  );
}
