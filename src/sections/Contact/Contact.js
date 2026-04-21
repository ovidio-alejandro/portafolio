import "./Contact.css";

function Contact() {
  return (
    <section className="contact" id="contact">

      <div className="contact-container">

        <h2 className="contact-title">Contacto</h2>

        <p className="contact-subtitle">
          ¿Tienes un proyecto o quieres hablar? Escríbeme 👇
        </p>

        <form className="contact-form">

          <input
            type="text"
            placeholder="Tu nombre"
            className="input"
          />

          <input
            type="email"
            placeholder="Tu email"
            className="input"
          />

          <textarea
            placeholder="Tu mensaje"
            className="textarea"
            rows="5"
          ></textarea>

          <button type="submit" className="button">
            Enviar mensaje
          </button>

        </form>

      </div>

    </section>
  );
}

export default Contact;