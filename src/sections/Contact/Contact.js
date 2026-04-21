import "./Contact.css";

function Contact() {

  const handleSubmit = (e) => {
    e.preventDefault();

    const nombre = e.target.nombre.value;
    const email = e.target.email.value;
    const mensaje = e.target.mensaje.value;

    const telefono = "5358553329";

    const texto = `
Hola 👋

Mi nombre es: ${nombre}
Mi email: ${email}

Mensaje:
${mensaje}
    `;

    const url = `https://wa.me/${telefono}?text=${encodeURIComponent(texto)}`;

    window.open(url, "_blank");
  };

  return (
    <section className="contact" id="contact">

      <div className="contact-container">

        <h2 className="contact-title">Contacto</h2>

        <p className="contact-subtitle">
          ¿Tienes un proyecto o quieres hablar? Escríbeme 👇
        </p>

        <form className="contact-form" onSubmit={handleSubmit}>

          <input
            type="text"
            name="nombre"
            placeholder="Tu nombre"
            className="input"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Tu email"
            className="input"
            required
          />

          <textarea
            name="mensaje"
            placeholder="Tu mensaje"
            className="textarea"
            rows="5"
            required
          ></textarea>

          <button type="submit" className="button">
            Enviar por WhatsApp
          </button>

        </form>

      </div>

    </section>
  );
}

export default Contact;