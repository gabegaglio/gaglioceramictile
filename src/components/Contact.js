import React from "react";
import Map from "./Map";

function Contact() {
  return (
    <section id="contact">
      <div className="container">
        <div className="section-title">
          Contact <em>Us</em>
        </div>
        <div className="section-body">
          Ready to start your project? We&apos;d love to hear from you. Contact
          us today for a free consultation and quote.
        </div>

        <div className="contact-layout">
          <div className="contact-form-wrap">
            <form
              action="https://formspree.io/f/xrbzzzjg"
              method="POST"
              className="contact-form"
            >
              <div className="form-row form-row--name-email">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="Your name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone Number *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  placeholder="(123) 456-7890"
                />
              </div>

              <div className="form-group">
                <label htmlFor="project-type">Project Type</label>
                <select id="project-type" name="project-type" defaultValue="">
                  <option value="">Select type</option>
                  <option value="kitchen">Kitchen Renovation</option>
                  <option value="bathroom">Bathroom Remodel</option>
                  <option value="fireplace">Fireplace Installation</option>
                  <option value="flooring">Flooring Installation</option>
                  <option value="commercial">Commercial Project</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="budget">Estimated Budget</label>
                <select id="budget" name="budget" defaultValue="">
                  <option value="">Select range (optional)</option>
                  <option value="under-5k">Under $5,000</option>
                  <option value="5k-15k">$5,000 – $15,000</option>
                  <option value="15k-30k">$15,000 – $30,000</option>
                  <option value="30k-50k">$30,000 – $50,000</option>
                  <option value="over-50k">Over $50,000</option>
                  <option value="discuss">Prefer to discuss</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Project Details *</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  placeholder="Tell us about your project, location, timeline, and requirements."
                />
              </div>

              <button type="submit" className="form-submit">
                Send Message
              </button>
              <p className="contact-form-privacy">
                We respect your privacy and will never share your information.
              </p>
            </form>
          </div>

          <div className="contact-info">
            <div className="contact-map-frame">
              <Map />
            </div>

            <div className="info-block">
              <div className="info-label">Location</div>
              <div className="info-val">
                Gaglio Ceramic Tile
                <br />
                East Brunswick, NJ 08816
              </div>
            </div>
            <div className="info-block">
              <div className="info-label">Email</div>
              <div className="info-val">gaglioceramictile@gmail.com</div>
            </div>
            <div className="divider" />
            <div className="info-block">
              <div className="info-label">Hours</div>
              <div className="info-val">
                Monday – Saturday: 9:00 AM – 4:00 PM
                <br />
                Sunday: Closed
              </div>
            </div>
            <div className="contact-social-row">
              <a
                href="https://facebook.com/gctile"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-social-link"
              >
                Facebook
              </a>
              <a
                href="https://instagram.com/gaglioceramictile"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-social-link"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
