import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">

      <h2 className="logo">Mi Portafolio</h2>

      <ul className="nav-links">

        <li>
          <a href="#hero">Inicio</a>
        </li>

        <li>
          <a href="#about">Sobre mí</a>
        </li>

        <li>
          <a href="#projects">Proyectos</a>
        </li>

        <li>
          <a href="#contact">Contacto</a>
        </li>

      </ul>

    </nav>
  );
}