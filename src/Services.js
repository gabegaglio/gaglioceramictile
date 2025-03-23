import React from "react";

function Services() {
  const services = [
    {
      title: "30+ Years of Experience",
      description:
        "We work with you to create unique and personalized tile designs that match your vision.",
      icon: "💪",
    },
    {
      title: "Professional Tile Installation",
      description:
        "Our experience ensures flawless tile installation for kitchens, bathrooms, floors, fireplaces and more.",
      icon: "🔧",
    },
    {
      title: "Remodelling",
      description:
        "Basement remodelling, door installations, drywall, painting, and more.",
      icon: "🔨",
    },
  ];

  return (
    <section id="services" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-light text-center text-gray-800 mb-12">
          We Tile, You Smile!
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-lg text-center transition-all duration-300 hover:bg-white/20"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-light text-gray-800 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
