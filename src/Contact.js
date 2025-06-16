import React from "react";
import Map from "./Map";

function Contact() {
  return (
    <section id="contact" className="py-20 min-h-screen">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-6xl font-bold text-center tracking-tight mb-4 text-black">
          Our Contact
        </h2>
        <p className="text-gray-700 text-center max-w-2xl mx-auto mb-16">
          Have any questions? Contact us.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white/20 backdrop-blur-md rounded-lg p-8 border border-white/30 shadow-lg">
            <h3 className="text-xl font-bold tracking-wider mb-6 text-black">
              Send us a message
            </h3>

            <form
              action="https://formspree.io/f/xrbzzzjg"
              method="POST"
              className="space-y-6"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-black mb-1"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full bg-white/30 backdrop-blur-md border border-white/40 rounded px-4 py-2 text-black placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-white/50 focus:bg-white/40 focus:backdrop-blur-lg transition-all duration-300"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-black mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full bg-white/30 backdrop-blur-md border border-white/40 rounded px-4 py-2 text-black placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-white/50 focus:bg-white/40 focus:backdrop-blur-lg transition-all duration-300"
                  placeholder="Your email address"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-black mb-1"
                >
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  className="w-full bg-white/30 backdrop-blur-md border border-white/40 rounded px-4 py-2 text-black placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-white/50 focus:bg-white/40 focus:backdrop-blur-lg transition-all duration-300"
                  placeholder="Your phone number"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-black mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="w-full bg-white/30 backdrop-blur-md border border-white/40 rounded px-4 py-2 text-black placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-white/50 focus:bg-white/40 focus:backdrop-blur-lg transition-all duration-300"
                  placeholder="How can we help? Let us know your location and inquiry."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-white/30 backdrop-blur-md text-black font-bold py-3 px-6 rounded tracking-wider hover:bg-white/40 hover:backdrop-blur-lg transition-all duration-300 border border-white/40 shadow-lg"
              >
                Send
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white/20 backdrop-blur-md rounded-lg p-8 border border-white/30 shadow-lg">
              <div className="h-64 rounded-lg overflow-hidden mb-6 border border-white/30">
                <Map />
              </div>

              <ul className="space-y-4 text-black">
                <li className="flex items-start gap-3">
                  <div className="bg-white/30 backdrop-blur-md p-2 rounded-lg border border-white/40 shadow-sm">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-gray-700"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <span>
                    Gaglio Ceramic Tile
                    <br />
                    East Brunswick, NJ 08816
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="bg-white/30 backdrop-blur-md p-2 rounded-lg border border-white/40 shadow-sm">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-gray-700"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <span>gaglioceramictile@gmail.com</span>
                </li>
              </ul>

              <div className="mt-8 pt-6 border-t border-white/30">
                <h4 className="text-sm font-medium text-gray-700 mb-3">
                  Business Hours
                </h4>
                <ul className="space-y-2 text-sm text-black">
                  <li className="flex justify-between">
                    <span>Monday - Saturday</span>
                    <span>9:00 AM - 4:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white/20 backdrop-blur-md rounded-lg p-8 border border-white/30 shadow-lg">
              <h3 className="text-xl font-bold tracking-wider mb-6 text-black">
                FOLLOW US
              </h3>
              <div className="flex gap-4">
                <a
                  href="https://facebook.com/gctile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/30 backdrop-blur-md text-gray-700 p-3 rounded-lg hover:bg-white/40 hover:backdrop-blur-lg transition-all duration-300 border border-white/40 shadow-sm"
                >
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>

                <a
                  href="https://instagram.com/gaglioceramictile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/30 backdrop-blur-md text-gray-700 p-3 rounded-lg hover:bg-white/40 hover:backdrop-blur-lg transition-all duration-300 border border-white/40 shadow-sm"
                >
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.09 1.064.077 1.791.232 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.233.636.388 1.363.465 2.427.077 1.067.09 1.407.09 4.123v.08c0 2.643-.012 2.987-.09 4.043-.077 1.064-.232 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.233-1.363.388-2.427.465-1.067.077-1.407.09-4.123.09h-.08c-2.643 0-2.987-.012-4.043-.09-1.064-.077-1.791-.232-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.233-.636-.388-1.363-.465-2.427-.047-1.024-.09-1.379-.09-3.808v-.63c0-2.43.013-2.784.09-3.808.077-1.064.232-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.233 1.363-.388 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
