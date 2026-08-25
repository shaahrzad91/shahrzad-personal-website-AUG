import Image from "next/image";

export function HeroSection() {
  return (
    <section className="hero" id="home" data-od-id="home-hero">
      <div className="hero-copy">
        <p className="eyebrow hero-kicker">Senior Data Scientist · Toronto</p>
        <h1 data-od-id="hero-heading">Building intelligent AI systems that turn complex data into meaningful decisions.</h1>
        <p className="hero-intro">
          I&apos;m Shahrzad Amin Ranjbar - an AI/ML engineer and generative-AI specialist who brings together rigorous modelling, responsible design, and a clear understanding of the people a system is meant to serve.
        </p>
        <div className="hero-actions" data-od-id="hero-actions">
          <a className="button button-primary" href="#projects">Explore my work <span aria-hidden="true">↗</span></a>
          <a className="button button-secondary" href="#about">About me</a>
          <a className="text-link" href="#contact">Contact</a>
        </div>
        <div className="hero-links" aria-label="Profile links">
          <a href="/shahrzad-amin-ranjbar-cv.pdf" download>Download CV</a>
          <a href="https://www.linkedin.com/in/shahrzad-aminranjbar/" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://github.com/shaahrzad91" target="_blank" rel="noreferrer">GitHub</a>
        </div>
      </div>

      <div className="hero-visual" aria-label="Portrait of Shahrzad Amin Ranjbar within a connected AI system">
        <div className="signal-field" aria-hidden="true">
          <i className="orbit orbit-one" /><i className="orbit orbit-two" />
          <i className="node node-one" /><i className="node node-two" /><i className="node node-three" />
          <i className="signal-line line-one" /><i className="signal-line line-two" />
        </div>
        <div className="portrait-card" data-od-id="professional-photo">
          <Image
            className="portrait-image"
            src="/shahrzad-profile.png"
            alt="Shahrzad Amin Ranjbar"
            fill
            priority
            sizes="(max-width: 600px) 68vw, (max-width: 820px) 360px, 28vw"
          />
          <div className="portrait-caption">
            <span>Shahrzad Amin Ranjbar</span>
            <span>Senior Data Scientist · AI/ML Engineer</span>
          </div>
        </div>
        <p className="visual-note"><span aria-hidden="true" /> Models are only useful when people can trust the decisions around them.</p>
      </div>
    </section>
  );
}
