import React from "react";

function CTASection({ scrollToSection }) {
  return (
    <section id="cta">
      <div className="container">
        <div className="section-eyebrow">Ready to Begin?</div>
        <div className="section-title">
          Ready to <em>Transform</em>
          <br />
          Your Space?
        </div>
        <div className="section-body">
          Let&apos;s discuss your project and bring your vision to life with our
          expert craftsmanship. Free consultation and quote.
        </div>
        <button
          type="button"
          className="btn-primary"
          onClick={() => scrollToSection("contact")}
        >
          Start Your Project
        </button>
      </div>
    </section>
  );
}

export default CTASection;
