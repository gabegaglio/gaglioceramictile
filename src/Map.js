import React from "react";

function Map() {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105158.64637497035!2d-74.50310670624827!3d40.4293864246841!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3c59a53131045%3A0x7eb0a64df036f72f!2sEast%20Brunswick%2C%20NJ!5e1!3m2!1sen!2sus!4v1750038656217!5m2!1sen!2sus"
      width="100%"
      height="100%"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="Gaglio Ceramic Tile - East Brunswick, NJ"
      className="rounded-lg"
    />
  );
}

export default Map;
