import type { KeyboardEvent } from "react";
import { navItems } from "./portfolio-data";

type PortfolioHeaderProps = {
  menuOpen: boolean;
  onMenuClose: () => void;
  onMenuToggle: () => void;
};

export function PortfolioHeader({ menuOpen, onMenuClose, onMenuToggle }: PortfolioHeaderProps) {
  const closeMenuOnEscape = (event: KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === "Escape") onMenuClose();
  };

  return (
    <header className="site-header" data-od-id="site-header">
      <a className="wordmark" href="#home" aria-label="Shahrzad Amin Ranjbar, home">
        <span>S</span><span className="wordmark-full">hahrzad Amin Ranjbar</span>
      </a>
      <nav id="primary-navigation" className={`primary-nav ${menuOpen ? "is-open" : ""}`} aria-label="Primary navigation">
        {navItems.map(([label, id]) => (
          <a key={id} href={`#${id}`} onClick={onMenuClose}>{label}</a>
        ))}
      </nav>
      <a className="header-contact" href="#contact">Say hello</a>
      <button
        className="menu-button"
        aria-expanded={menuOpen}
        aria-controls="primary-navigation"
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        onClick={onMenuToggle}
        onKeyDown={closeMenuOnEscape}
      >
        <span /><span />
      </button>
    </header>
  );
}
