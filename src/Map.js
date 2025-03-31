function Map() {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      
    
      <div className="w-full max-w-5xl px-4 sm:px-6 lg:px-8 mx-auto">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d97186.33022362067!2d-74.50310684740879!3d40.429386424807724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3c59a53131045%3A0x7eb0a64df036f72f!2sEast%20Brunswick%2C%20NJ!5e0!3m2!1sen!2sus!4v1743355546629!5m2!1sen!2sus"
          width="100%"
          height="450"
          className="border-0 rounded-lg shadow-lg"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div className="w-3/4 h-full flex justify-center items-center py-5 text-center">
        <h1> Located in New Jersey & Serving New Jersey, Staten Island, Brooklyn, & Queens</h1>
      </div>
    </div>
  );
}

export default Map;