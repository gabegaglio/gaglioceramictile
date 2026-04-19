import React, { useState, useEffect } from "react";
import HeroBrickCanvas from "./HeroBrickCanvas";

function Header({ scrollToSection }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id) => {
    setMobileOpen(false);
    scrollToSection(id);
  };

  const links = [
    { id: "services", label: "Services" },
    { id: "gallery", label: "Gallery" },
    { id: "about", label: "About" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <>
      <nav className={scrolled ? "scrolled" : ""}>
        <button
          type="button"
          className="nav-logo"
          onClick={() => go("hero")}
        >
          <span className="nav-logo-mark">Gaglio</span>
          <span className="nav-logo-rest">Ceramic Tile</span>
        </button>

        <div className="nav-links">
          {links.map((l) => (
            <button key={l.id} type="button" onClick={() => go(l.id)}>
              {l.label}
            </button>
          ))}
          <button
            type="button"
            className="nav-cta"
            onClick={() => go("contact")}
          >
            Get a Quote
          </button>
        </div>

        <button
          type="button"
          className="nav-mobile-btn"
          aria-label="Open menu"
          onClick={() => setMobileOpen((o) => !o)}
        >
          <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 8h16M4 16h16" />
            )}
          </svg>
        </button>
      </nav>

      {mobileOpen && (
        <div className="nav-mobile-panel">
          {links.map((l) => (
            <button key={l.id} type="button" onClick={() => go(l.id)}>
              {l.label}
            </button>
          ))}
          <button type="button" className="nav-cta" onClick={() => go("contact")}>
            Get a Quote
          </button>
        </div>
      )}

      <section id="hero">
        <HeroBrickCanvas />
        <div className="hero-overlay" />
        <div className="hero-content">
          <div className="hero-eyebrow">Ceramic Tile &amp; Remodeling</div>
          <div className="hero-headline">
            <h1 className="hero-title">
              <span className="hero-title-line">
                <em>Gaglio</em>
              </span>
            </h1>
            <p className="hero-subtitle">Ceramic Tile</p>
          </div>
          <p className="hero-tagline">
            Transforming spaces with precision, artistry, and 30+ years of
            experience.
          </p>
          <div className="hero-actions">
            <button
              type="button"
              className="btn-primary"
              onClick={() => go("contact")}
            >
              Start Your Project
            </button>
            <button
              type="button"
              className="btn-ghost"
              onClick={() => go("gallery")}
            >
              View Our Work
            </button>
          </div>
          <div className="hero-social">
            <a
              className="hero-social-link"
              href="https://instagram.com/gaglioceramictile"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
            <span className="hero-social-sep" aria-hidden="true">
              ·
            </span>
            <a
              className="hero-social-link"
              href="https://facebook.com/gctile"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>
          </div>
        </div>
        <div className="hero-scroll">
          <div className="scroll-line" />
          <span>Scroll</span>
        </div>
      </section>
    </>
  );
}

export default Header;
