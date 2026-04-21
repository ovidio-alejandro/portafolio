import "./Projects.css";

function Projects() {
  return (
    <section className="projects" id="projects">

      <h2 className="projects-title">Mis Proyectos</h2>

      <div className="projects-container">

        {/* Proyecto 1 */}
        <div className="project-card">
          <h3>Proyecto 1</h3>
          <p>Descripción breve del proyecto que hiciste.</p>

          <div className="project-links">
            <a href="#" target="_blank">Demo</a>
            <a href="#" target="_blank">Código</a>
          </div>
        </div>

        {/* Proyecto 2 */}
        <div className="project-card">
          <h3>Proyecto 2</h3>
          <p>Descripción breve del proyecto que hiciste.</p>

          <div className="project-links">
            <a href="#" target="_blank">Demo</a>
            <a href="#" target="_blank">Código</a>
          </div>
        </div>

        {/* Proyecto 3 */}
        <div className="project-card">
          <h3>Proyecto 3</h3>
          <p>Descripción breve del proyecto que hiciste.</p>

          <div className="project-links">
            <a href="#" target="_blank">Demo</a>
            <a href="#" target="_blank">Código</a>
          </div>
        </div>

      </div>

    </section>
  );
}

export default Projects;