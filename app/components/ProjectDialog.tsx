import { useEffect } from "react";
import type { Project } from "./portfolio-data";
import { EditablePlaceholder } from "./PortfolioShared";

export function ProjectDialog({ project, onClose }: { project: Project; onClose: () => void }) {
  useEffect(() => {
    const closeOnEscape = (event: globalThis.KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", closeOnEscape);
    document.body.classList.add("modal-open");
    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      document.body.classList.remove("modal-open");
    };
  }, [onClose]);

  return (
    <div className="dialog-backdrop" role="presentation" onMouseDown={onClose}>
      <article
        className="project-dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-dialog-title"
        onMouseDown={(event) => event.stopPropagation()}
        data-od-id={`project-dialog-${project.id}`}
      >
        <button className="dialog-close" onClick={onClose} aria-label="Close project case study">
          Close <span aria-hidden="true">×</span>
        </button>
        <p className="eyebrow">{project.kind}</p>
        <h2 id="project-dialog-title">{project.title}</h2>
        <p className="dialog-context">{project.context}</p>
        <div className="case-grid">
          <section><h3>Challenge</h3><p>{project.challenge}</p></section>
          <section><h3>My role</h3><p>{project.role}</p></section>
          <section><h3>Solution</h3><p>{project.solution}</p></section>
          <section><h3>Architecture</h3><p>{project.architecture}</p></section>
          <section className="case-impact"><h3>Business / research impact</h3><p>{project.impact}</p></section>
          <section>
            <h3>Lesson learned</h3>
            <p><EditablePlaceholder>Add a personal lesson learned from this project.</EditablePlaceholder></p>
          </section>
        </div>
        <div className="tag-row" aria-label="Technologies used">
          {project.technologies.map((technology) => <span key={technology}>{technology}</span>)}
        </div>
      </article>
    </div>
  );
}
