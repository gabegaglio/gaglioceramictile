import React from "react";

const base = process.env.PUBLIC_URL || "";

function AboutSection({ scrollToSection }) {
  const cells = [
    {
      src: `${base}/images/full_reno_1.png`,
      alt: "Open-concept renovation with kitchen, living space, and custom built-ins",
    },
    {
      src: `${base}/images/outdoor_1.png`,
      alt: "Exterior ledger stone pillar and precision masonry beside entry",
    },
    {
      src: `${base}/images/fireplace_beautiful.png`,
      alt: "Custom indoor stone fireplace and hearth with arched opening",
    },
    {
      src: `${base}/images/niche_showcase.png`,
      alt: "Custom tiled shower niche with mosaic detail and marble sill",
    },
  ];

  return (
    <section id="about">
      <div className="container">
        <div className="about-inner">
          <div className="about-text">
            <div className="section-eyebrow">Our Story</div>
            <div className="section-title">
              <em>Precision</em>
              <br />
              &amp; Artistry
            </div>
            <div
              style={{
                width: 48,
                height: 1,
                background: "rgba(246,243,236,0.15)",
                margin: "28px 0",
              }}
            />
            <p>
              Gaglio Ceramic Tile has been transforming residential and
              commercial spaces for over three decades. Our team brings an
              unmatched level of craftsmanship and care to every project.
            </p>
            <p>
              We work with you to create unique and personalized tile designs —
              from kitchens and bathrooms to fireplaces and flooring — that
              match your vision and stand the test of time.
            </p>
            <button
              type="button"
              className="btn-ghost"
              style={{ marginTop: 32 }}
              onClick={() => scrollToSection("contact")}
            >
              Let&apos;s Work Together
            </button>
          </div>
          <div className="about-visual">
            {cells.map((c) => (
              <div className="about-cell" key={c.alt}>
                <img src={c.src} alt={c.alt} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
