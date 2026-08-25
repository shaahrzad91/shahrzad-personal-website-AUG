export function EditablePlaceholder({ children }: { children: string }) {
  return (
    <span
      className="editable-placeholder"
      contentEditable
      suppressContentEditableWarning
      title="Click to replace this placeholder"
    >
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
}) {
  return (
    <header className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <div>
        <h2>{title}</h2>
        {intro && <p className="section-intro">{intro}</p>}
      </div>
    </header>
  );
}
