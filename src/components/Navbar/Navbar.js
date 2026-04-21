import { useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(false);
  };

  return (
    <nav className="navbar">

      <div className="logo">MiPortafolio</div>

      {/* icono hamburguesa */}
      <div className="menu-icon" onClick={() => setOpen(!open)}>
        ☰
      </div>

      <ul className={`nav-links ${open ? "active" : ""}`}>

        <li><a href="#hero" onClick={handleClick}>Inicio</a></li>
        <li><a href="#about" onClick={handleClick}>Sobre mí</a></li>
        <li><a href="#projects" onClick={handleClick}>Proyectos</a></li>
        <li><a href="#contact" onClick={handleClick}>Contacto</a></li>

      </ul>

    </nav>
  );
}