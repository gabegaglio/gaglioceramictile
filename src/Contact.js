import React from "react";

function Contact() {
  return (
    <div className="min-h-screen w-full py-10 px-4">
      <div className="max-w-[70%] md:max-w-[30%] mx-auto">
        <h2 className="text-6xl font-light text-center text-gray-800 mb-12">
          Contact Us
        </h2>
        <form
          action="https://formspree.io/f/xrbzzzjg"
          method="POST"
          className="space-y-6 w-full"
        >
          <div className="w-full">
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full px-8 py-4 bg-white/20 backdrop-blur-md border border-gray-300/30 rounded-lg focus:ring-2 focus:ring-white/20 focus:border-transparent text-gray-800 placeholder-gray-500 text-lg"
              placeholder="Your name"
            />
          </div>
          <div className="w-full">
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-8 py-4 bg-white/20 backdrop-blur-md border border-gray-300/30 rounded-lg focus:ring-2 focus:ring-white/20 focus:border-transparent text-gray-800 placeholder-gray-500 text-lg"
              placeholder="Your email"
            />
          </div>
          <div className="w-full">
            <input
              type="text"
              id="phone"
              name="phone"
              required
              className="w-full px-8 py-4 bg-white/20 backdrop-blur-md border border-gray-300/30 rounded-lg focus:ring-2 focus:ring-white/20 focus:border-transparent text-gray-800 placeholder-gray-500 text-lg"
              placeholder="Phone Number"
            />
          </div>
          <div className="w-full">
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              className="w-full px-8 py-4 bg-white/20 backdrop-blur-md border border-gray-300/30 rounded-lg focus:ring-2 focus:ring-white/20 focus:border-transparent text-gray-800 placeholder-gray-500 text-lg"
              placeholder="How Can We Help? Let us know your location and inquiry."
            />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="w-48 bg-white/20 backdrop-blur-md text-gray-800 py-2 px-6 rounded-lg hover:bg-white/30 hover:scale-110 transition-all duration-300 border border-gray-300/30 text-lg"
            >
              Submit
            </button>
          </div>
        </form>

        <div className="flex justify-center space-x-8 mt-12">
          <a
            href="https://facebook.com/gctile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray hover:scale-110 transition-transform duration-200"
          >
            <svg
              className="w-12 h-12 md:w-16 md:h-16"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                clipRule="evenodd"
              />
            </svg>
          </a>
          <a
            href="https://instagram.com/gaglioceramictile/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray hover:scale-110 transition-transform duration-200"
          >
            <svg
              className="w-12 h-12 md:w-16 md:h-16"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
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
  );
}

export default Contact;
