function App() {
  return (
    <>
      <header>
        <h1>DevJobs</h1>

        <nav>
          <a href="./index.html">Inicio</a>
          <a href="./empleos.html">Empleos</a>
          <a href="">Empresas</a>
          <a href="">Salarios</a>
        </nav>

        <div>
          {/* esta información la recuperamos */}

          <devjobs-avatar
            service="facebook"
            username="yorscastiblancohenao"
            size="34"
          />

          {/* boton subir cv */}
          <a href="">Subir CV</a>
        </div>
      </header>

      <main>
        <section className="jobs-search">
          <h1>Encuentra tu próximo trabajo </h1>
          <p>Explora miles de oportunidades en el sector tecnológico</p>

          <form id="empleos-search-form" role="search">
            <div className="search-bar">
              {/* logo */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-search"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
                <path d="M21 21l-6 -6" />
              </svg>
              {/* fin de logo */}
              <input
                type="text"
                placeholder="Buscar empleos por titulo, habilidad o empresa"
              />
            </div>

            <div className="search-filters">
              <select name="technology" id="filter-technology">
                <option value="">Tecnologia</option>
                <option value="javascript">javascript</option>
                <option value="python">Python</option>
                <option value="java">Java</option>
                <option value="react">React</option>
                <option value="node.js">Node.js</option>
              </select>

              <select name="Location" id="filter-Location">
                <option value="">ubicacion</option>
                <option value="remoto">remoto</option>
                <option value="cdmx">Ciudad de mexico</option>
                <option value="Guadalajara">Guadalajara</option>
                <option value="monterrey">Monterrey</option>
                <option value="barcelona">Barcelona</option>
              </select>
              <select name="experience-level" id="filter-experience-level">
                <option value="">Nivel de experiencia</option>
                <option value="junior">Junior</option>
                <option value="mid">Mid-level</option>
                <option value="senior">Senior</option>
                <option value="lead">lead</option>
              </select>
            </div>
          </form>
        </section>

        <section>
          <h2>Resultados de búsqueda</h2>

          <div className="jobs-listings">
            {/* Se insertan los empleos dinamicamente */}
          </div>
        </section>

        <nav className="pagination">
          <a href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-left"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M15 6l-6 6l6 6" />
            </svg>
          </a>
          <a className="is-active" href="#">
            1
          </a>
          <a href="#">2</a>
          <a href="#">3</a>
          <a href="#">4</a>
          <a href="#">5</a>
          <a href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M9 6l6 6l-6 6" />
            </svg>
          </a>
        </nav>
      </main>
      <footer style={{ paddingBottom: '2000px' }}>
        <small>&copy; 2025 DevJobs. Todos los derechos reservados.</small>
      </footer>
    </>
  )
}

export default App
