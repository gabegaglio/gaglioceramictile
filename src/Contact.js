const Contact = () => {
  return (
    <div className="contact">
        <div className="formContainer">
        <h1 className="contactHeader">Contact Us</h1>
        <form action="https://formspree.io/f/xrbzzzjg" method="POST">
          <input
            name="name"
            type="text"
            id="name"
            placeholder="Name"
            required
          />
          <input
            name="email"
            type="email"
            id="email"
            placeholder="Email"
            required
          />
          <input
            name="phone"
            type="text"
            id="phone"
            placeholder="Phone Number"
            required
          />
          <textarea
            name="message"
            id="message"
            rows='4'
            placeholder="How Can We Help? Let us know your location and inquiry."
          ></textarea>

          <button type="submit" id="submit">
            Submit
          </button>
          
        </form>
      </div>

      <div className="footer">
                <a target="_blank" href="https://www.facebook.com/gctile/">
                    <i className="fa-brands fa-facebook fa-3x"></i>
                </a>
                <a target="_blank" href="https://www.instagram.com/gaglioceramictile/">
                    <i className="fa-brands fa-square-instagram fa-3x"></i>
                </a>
        </div>

    </div>
  );
}

export default Contact;
