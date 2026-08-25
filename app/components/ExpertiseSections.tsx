import { certifications, interests, skillGroups } from "./portfolio-data";
import { EditablePlaceholder, SectionHeading } from "./PortfolioShared";

export function SkillsSection() {
  return (
    <section className="skills section section-navy" id="skills" data-od-id="skills-section">
      <SectionHeading
        eyebrow="05 · Technical skills"
        title="Depth across the model lifecycle."
        intro="A toolkit shaped by research, production systems, banking, consulting, and responsible AI."
      />
      <div className="skills-grid">
        {skillGroups.map(([group, skills], index) => (
          <article className="skill-card" key={group} data-od-id={`skill-card-${index + 1}`}>
            <h3>{group}</h3>
            <ul>{skills.map((skill) => <li key={skill}>{skill}</li>)}</ul>
          </article>
        ))}
      </div>
    </section>
  );
}

export function EducationSection() {
  return (
    <section className="education section" id="education" data-od-id="education-section">
      <SectionHeading eyebrow="06 · Education" title="Engineering roots. A computer-science lens." />
      <div className="education-grid">
        <article className="education-card" data-od-id="education-concordia">
          <p className="eyebrow">Concordia University</p>
          <h3>Master of Engineering (MEng)<br />Master of Computer Science (MCS)</h3>
          <p>Montreal, Canada</p>
          <EditablePlaceholder>Add graduation dates and specialization.</EditablePlaceholder>
        </article>
        <article className="education-card" data-od-id="education-azad">
          <p className="eyebrow">Azad University</p>
          <h3>Bachelor of Engineering (BEng)<br />Bachelor of Software Engineering</h3>
          <p>Iran</p>
          <EditablePlaceholder>Add graduation dates and campus.</EditablePlaceholder>
        </article>
      </div>
    </section>
  );
}

export function CertificationsSection() {
  return (
    <section className="certifications section" id="certifications" data-od-id="certifications-section">
      <SectionHeading
        eyebrow="07 · Certifications"
        title="A practice of learning in public."
        intro="Focused study across generative AI, production ML, deep learning, and responsible systems."
      />
      <div className="cert-list">
        {certifications.map(([date, title, issuer], index) => (
          <article key={title} data-od-id={`certification-${index + 1}`}>
            <time>{date}</time><h3>{title}</h3><p>{issuer}</p>
          </article>
        ))}
      </div>
      <button className="quiet-action" type="button" onClick={(event) => {
        const target = event.currentTarget.nextElementSibling as HTMLElement | null;
        target?.focus();
      }}>Add a future certification <span aria-hidden="true">+</span></button>
      <div className="future-cert" tabIndex={-1}><EditablePlaceholder>Add certification title, issuer, and date.</EditablePlaceholder></div>
    </section>
  );
}

export function PhilosophySection() {
  return (
    <section className="philosophy section" id="philosophy" data-od-id="philosophy-section">
      <p className="eyebrow">08 · Professional philosophy</p>
      <blockquote>
        “The best AI system is not the one with the most impressive model. It is the one people can use, question, trust, and connect to a meaningful decision.”
      </blockquote>
      <div className="philosophy-columns">
        <article><span>01</span><h3>Start with usefulness</h3><p>Define the decision, the person making it, and the value the system should create before optimizing the model.</p></article>
        <article><span>02</span><h3>Design for responsibility</h3><p>Fairness, explainability, and accountability belong inside the architecture - not in a final review.</p></article>
        <article><span>03</span><h3>Make value measurable</h3><p>Connect technical performance to operational outcomes while staying honest about uncertainty and limits.</p></article>
      </div>
    </section>
  );
}

export function InterestsSection() {
  return (
    <section className="interests section section-blue" id="interests" data-od-id="interests-section">
      <SectionHeading
        eyebrow="09 · Current interests"
        title="Questions I’m following now."
        intro="The themes that keep pulling me back to papers, prototypes, conversations, and experiments."
      />
      <div className="interest-list">
        {interests.map(([name, description], index) => (
          <article key={name} data-od-id={`interest-${index + 1}`}>
            <span>0{index + 1}</span><h3>{name}</h3><p>{description}</p>
          </article>
        ))}
      </div>
      <aside className="community-note" data-od-id="community-learning-note">
        <p className="eyebrow">Beyond the build</p>
        <h3>Sharing practical AI workflows with the community.</h3>
        <p>A public 2026 LinkedIn event post lists Shahrzad as a guest speaker for a hands-on workshop on AI-powered workflows, hosted with EY Canada.</p>
        <a href="https://www.linkedin.com/posts/max-muslims-achieving-excellence-network_level-up-your-ai-skills-with-smart-workflows-activity-7449426386202701824-FOrC" target="_blank" rel="noreferrer">View the public event post <span aria-hidden="true">↗</span></a>
      </aside>
    </section>
  );
}
