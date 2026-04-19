import React from "react";

const base = process.env.PUBLIC_URL || "";

const SHOWCASE = [
  {
    id: "kitchen",
    src: `${base}/images/kitchen.jpg`,
    title: "Full Renovations",
  },
  {
    id: "niche",
    src: `${base}/images/niche.jpg`,
    title: "Custom Niche Design",
  },
  {
    id: "finish",
    src: `${base}/images/gal7.jpg`,
    title: "Professional Finish",
  },
];

const SERVICE_ITEMS = [
  "Ceramic & porcelain tile installation",
  "Natural stone, marble & granite",
  "Kitchen backsplashes, floors & islands",
  "Bathroom floors, walls & tub surrounds",
  "Custom showers, waterproofing & curbs",
  "Recessed niches, benches & ledges",
  "Fireplace surrounds, hearths & facings",
  "Floor prep, mud work & leveling",
  "Drywall repair, skim coating & painting",
  "Full remodeling coordination from concept to completion",
];

function Services({ scrollToSection }) {
  const goGallery = () => scrollToSection?.("gallery");

  return (
    <section id="services">
      <div className="container">
        <div className="section-eyebrow">What we do</div>
        <div className="section-title">
          Crafting <em>Beautiful</em> Spaces
        </div>
        <div className="section-body services-combined-intro">
          With over 30 years of experience, we transform your vision into
          reality through expert tile installation, custom layouts, and
          comprehensive remodeling—from concept to completion—with the same
          care we bring to every home.
        </div>

        <div className="services-showcase">
          {SHOWCASE.map((item) => (
            <div
              className="feat-card"
              key={item.id}
              role="button"
              tabIndex={0}
              onClick={goGallery}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  goGallery();
                }
              }}
            >
              <img className="feat-img" src={item.src} alt={item.title} />
              <div className="feat-info feat-info--single">
                <div className="feat-name">{item.title}</div>
              </div>
            </div>
          ))}
        </div>

        <p className="services-list-label">Services we provide</p>
        <ul className="services-detail-list">
          {SERVICE_ITEMS.map((text) => (
            <li key={text}>{text}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Services;
