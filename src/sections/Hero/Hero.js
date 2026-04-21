import "./Hero.css";

function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-container">

        <p className="hero-subtitle">Hola 👋, mi nombre es</p>

        <h1 className="hero-title">Ovidio Alejandro</h1>

        <h2 className="hero-role">Frontend Developer</h2>

        <p className="hero-description">
          Construyo interfaces web modernas y experiencias digitales
          enfocadas en rendimiento y diseño.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="btn primary">
            Ver proyectos
          </a>

          <a href="#contact" className="btn secondary">
            Contacto
          </a>
        </div>

      </div>
    </section>
  );
}

export default Hero;