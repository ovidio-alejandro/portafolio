import "./About.css";

function About() {
  return (
    <section className="about" id="about">

      <h2 className="about-title">Sobre mí</h2>

      <div className="about-container">

        <p className="about-text">
          Soy un desarrollador frontend apasionado por crear interfaces modernas,
          funcionales y enfocadas en la experiencia del usuario.
        </p>

        <p className="about-text">
          Actualmente trabajo con React, JavaScript y CSS, construyendo proyectos
          personales y mejorando mis habilidades cada día.
        </p>

        <p className="about-text">
          Me gusta resolver problemas, aprender nuevas tecnologías y transformar
          ideas en productos reales.
        </p>

      </div>

    </section>
  );
}

export default About;