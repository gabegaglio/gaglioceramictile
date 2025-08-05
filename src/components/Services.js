import React from "react";
import { motion } from "framer-motion";

function Services() {
  const services = [
    {
      title: "30+ Years of Experience",
      description:
        "Located in East Brunswick, New Jersey. We work with you to create unique and personalized tile designs that match your vision.",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      image: `${process.env.PUBLIC_URL}/images/gal1.jpg`,
    },
    {
      title: "Professional Installation",
      description:
        "Our expertise ensures flawless tile installation for kitchens, bathrooms, floors, fireplaces, and more with precision and care.",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
          />
        </svg>
      ),
      image: `${process.env.PUBLIC_URL}/images/kitchen.jpg`,
    },
    {
      title: "Complete Remodeling",
      description:
        "Beyond tile work, we offer comprehensive remodeling services including basement finishing, door installations, drywall, and painting.",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
          />
        </svg>
      ),
      image: `${process.env.PUBLIC_URL}/images/bathroom2.jpg`,
    },
  ];

  return (
    <section className="py-8 md:py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-light text-gray-900 mb-4 md:mb-6">
            Our Services
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From concept to completion, we deliver exceptional craftsmanship and
            personalized service for every project.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-2xl md:rounded-3xl aspect-[4/3] md:h-[500px] md:aspect-auto"
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="relative z-10 h-full flex flex-col justify-end p-6 md:p-8">
                <div className="bg-white/10 backdrop-blur-md rounded-xl md:rounded-2xl p-4 md:p-6 border border-white/20 hover:bg-white/20 transition-all duration-500 transform group-hover:translate-y-[-8px]">
                  <div className="flex items-center mb-3 md:mb-4">
                    <div className="text-white/90 mr-3 md:mr-4">
                      {service.icon}
                    </div>
                    <h3 className="text-xl md:text-2xl font-light text-white">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-white/80 leading-relaxed text-sm md:text-base">
                    {service.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Service Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 md:mt-20 grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8"
        >
          {/* 30+ Years Experience */}
          <div className="text-center">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 md:p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="text-2xl md:text-3xl lg:text-4xl font-light text-gray-900 mb-1 md:mb-2">
                30+
              </div>
              <div className="text-gray-600 text-xs md:text-sm lg:text-base">
                Years Experience
              </div>
            </div>
          </div>

          {/* 500+ Projects Completed */}
          <div className="text-center">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 md:p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="text-2xl md:text-3xl lg:text-4xl font-light text-gray-900 mb-1 md:mb-2">
                500+
              </div>
              <div className="text-gray-600 text-xs md:text-sm lg:text-base">
                Projects Completed
              </div>
            </div>
          </div>

          {/* 100% Quality Guaranteed - Will be in middle on mobile with 2-col grid */}
          <div className="text-center col-span-2 md:col-span-1">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 md:p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 mx-auto max-w-xs md:max-w-none">
              <div className="text-2xl md:text-3xl lg:text-4xl font-light text-gray-900 mb-1 md:mb-2">
                100%
              </div>
              <div className="text-gray-600 text-xs md:text-sm lg:text-base">
                Quality Guaranteed
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Services;
