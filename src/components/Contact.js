import React from "react";
import { motion } from "framer-motion";
import Map from "./Map";

function Contact() {
  return (
    <section id="contact" className="py-16 md:py-28 relative overflow-hidden">
      {/* Blurred Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={`${process.env.PUBLIC_URL}/images/gal3.jpg`}
          alt=""
          className="w-full h-full object-cover scale-110"
          style={{ filter: "blur(20px)" }}
        />
        <div className="absolute inset-0 bg-stone-50/85"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-14 md:mb-20"
        >
          <p className="text-xs tracking-[0.3em] uppercase text-stone-400 font-medium mb-4">
            Start Your Project
          </p>
          <h2 className="font-serif text-4xl md:text-6xl font-light text-stone-800 mb-5">
            Contact Us
          </h2>
          <p className="text-base md:text-lg text-stone-500 max-w-2xl mx-auto leading-relaxed">
            Ready to start your project? We'd love to hear from you. Contact us
            today for a free consultation and quote.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-14">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-sm p-8 md:p-10 shadow-sm border border-stone-200/50"
          >
            <div className="mb-8">
              <h3 className="font-serif text-2xl md:text-3xl font-light text-stone-800 mb-3">
                Let's Start Your Project
              </h3>
              <p className="text-stone-500 text-sm leading-relaxed">
                Fill out the form below and we'll get back to you within 24
                hours.
              </p>
            </div>

            <form
              action="https://formspree.io/f/xrbzzzjg"
              method="POST"
              className="space-y-5"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs font-medium tracking-wide uppercase text-stone-500 mb-2"
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full bg-stone-50 border border-stone-200 rounded-sm px-4 py-3.5 text-stone-800 placeholder-stone-400 text-sm focus:outline-none focus:border-stone-400 focus:ring-1 focus:ring-stone-400/20 transition-all duration-200"
                    placeholder="Full Name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-medium tracking-wide uppercase text-stone-500 mb-2"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full bg-stone-50 border border-stone-200 rounded-sm px-4 py-3.5 text-stone-800 placeholder-stone-400 text-sm focus:outline-none focus:border-stone-400 focus:ring-1 focus:ring-stone-400/20 transition-all duration-200"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-xs font-medium tracking-wide uppercase text-stone-500 mb-2"
                >
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  className="w-full bg-stone-50 border border-stone-200 rounded-sm px-4 py-3.5 text-stone-800 placeholder-stone-400 text-sm focus:outline-none focus:border-stone-400 focus:ring-1 focus:ring-stone-400/20 transition-all duration-200"
                  placeholder="(123) 456-7890"
                />
              </div>

              <div>
                <label
                  htmlFor="project-type"
                  className="block text-xs font-medium tracking-wide uppercase text-stone-500 mb-2"
                >
                  Project Type
                </label>
                <div className="relative">
                  <select
                    id="project-type"
                    name="project-type"
                    className="w-full bg-stone-50 border border-stone-200 rounded-sm px-4 py-3.5 text-stone-800 text-sm focus:outline-none focus:border-stone-400 focus:ring-1 focus:ring-stone-400/20 transition-all duration-200 appearance-none cursor-pointer"
                  >
                    <option value="">Select your project type</option>
                    <option value="kitchen">Kitchen Renovation</option>
                    <option value="bathroom">Bathroom Remodel</option>
                    <option value="fireplace">Fireplace Installation</option>
                    <option value="flooring">Flooring Installation</option>
                    <option value="commercial">Commercial Project</option>
                    <option value="other">Other</option>
                  </select>
                  <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                    <svg
                      className="w-4 h-4 text-stone-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              <div>
                <label
                  htmlFor="budget"
                  className="block text-xs font-medium tracking-wide uppercase text-stone-500 mb-2"
                >
                  Estimated Budget
                </label>
                <div className="relative">
                  <select
                    id="budget"
                    name="budget"
                    className="w-full bg-stone-50 border border-stone-200 rounded-sm px-4 py-3.5 text-stone-800 text-sm focus:outline-none focus:border-stone-400 focus:ring-1 focus:ring-stone-400/20 transition-all duration-200 appearance-none cursor-pointer"
                  >
                    <option value="">Select budget range (optional)</option>
                    <option value="under-5k">Under $5,000</option>
                    <option value="5k-15k">$5,000 – $15,000</option>
                    <option value="15k-30k">$15,000 – $30,000</option>
                    <option value="30k-50k">$30,000 – $50,000</option>
                    <option value="over-50k">Over $50,000</option>
                    <option value="discuss">Prefer to discuss</option>
                  </select>
                  <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                    <svg
                      className="w-4 h-4 text-stone-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-xs font-medium tracking-wide uppercase text-stone-500 mb-2"
                >
                  Project Details *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full bg-stone-50 border border-stone-200 rounded-sm px-4 py-3.5 text-stone-800 placeholder-stone-400 text-sm focus:outline-none focus:border-stone-400 focus:ring-1 focus:ring-stone-400/20 transition-all duration-200 resize-none"
                  placeholder="Tell us about your project, location, timeline, and any specific requirements."
                ></textarea>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-stone-800 text-white text-sm font-medium tracking-widest uppercase py-4 px-8 rounded-sm hover:bg-stone-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-stone-800/20 focus:ring-offset-2"
                >
                  Send Message
                </button>
              </div>

              <p className="text-xs text-stone-400 text-center pt-2">
                We respect your privacy and will never share your information.
              </p>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Map */}
            <div className="bg-white rounded-sm overflow-hidden shadow-sm border border-stone-200/50">
              <div className="h-72">
                <Map />
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-start gap-4">
                  <div className="text-stone-400 mt-0.5">
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-stone-700 text-sm mb-0.5">
                      Location
                    </h4>
                    <p className="text-stone-500 text-sm">
                      Gaglio Ceramic Tile
                      <br />
                      East Brunswick, NJ 08816
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="text-stone-400 mt-0.5">
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-stone-700 text-sm mb-0.5">
                      Email
                    </h4>
                    <p className="text-stone-500 text-sm">
                      gaglioceramictile@gmail.com
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-white rounded-sm p-6 shadow-sm border border-stone-200/50">
              <h3 className="font-serif text-xl font-light text-stone-800 mb-4">
                Business Hours
              </h3>
              <div className="space-y-2.5">
                <div className="flex justify-between items-center">
                  <span className="text-stone-500 text-sm">
                    Monday – Saturday
                  </span>
                  <span className="text-stone-700 font-medium text-sm">
                    9:00 AM – 4:00 PM
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-stone-500 text-sm">Sunday</span>
                  <span className="text-stone-700 font-medium text-sm">
                    Closed
                  </span>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-white rounded-sm p-6 shadow-sm border border-stone-200/50">
              <h3 className="font-serif text-xl font-light text-stone-800 mb-4">
                Follow Our Work
              </h3>
              <div className="flex gap-3">
                <a
                  href="https://facebook.com/gctile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-stone-400 hover:text-stone-700 p-3 border border-stone-200 rounded-sm hover:border-stone-300 transition-all duration-300"
                >
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                  </svg>
                </a>
                <a
                  href="https://instagram.com/gaglioceramictile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-stone-400 hover:text-stone-700 p-3 border border-stone-200 rounded-sm hover:border-stone-300 transition-all duration-300"
                >
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12.315 2c2.43 0 2.784.013 3.808.09 1.064.077 1.791.232 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.233.636.388 1.363.465 2.427.077 1.067.09 1.407.09 4.123v.08c0 2.643-.012 2.987-.09 4.043-.077 1.064-.232 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.233-1.363.388-2.427.465-1.067.077-1.407.09-4.123.09h-.08c-2.643 0-2.987-.012-4.043-.09-1.064-.077-1.791-.232-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.233-.636-.388-1.363-.465-2.427-.047-1.024-.09-1.379-.09-3.808v-.63c0-2.43.013-2.784.09-3.808.077-1.064.232-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.233 1.363-.388 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
