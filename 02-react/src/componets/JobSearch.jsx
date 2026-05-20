import {useId} from "react"
function JobSearch() {
  const  idText = useId()
  const  ideTtechology = useId()
  const  idLocation = useId()
  const  idExperienceLevel = useId()



  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submit del formulario de busqueda");
  };
  return (
    <section className="jobs-search">
      <h1>Encuentra tu próximo trabajo </h1>
      <p>Explora miles de oportunidades en el sector tecnológico</p>

      <form onSubmit={handleSubmit} id="empleos-search-form" role="search">
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
            name={idText}
            type="text"
            placeholder="Buscar empleos por titulo, habilidad o empresa"
          />

          <button type="submit" style={{position: "absolute", right: "2px"}}>Buscar</button>
        </div>

        <div className="search-filters">
          <select name={ideTtechology} id="filter-technology">
            <option value="">Tecnologia</option>
            <option value="javascript">javascript</option>
            <option value="python">Python</option>
            <option value="java">Java</option>
            <option value="react">React</option>
            <option value="node.js">Node.js</option>
          </select>

          <select name={idLocation} id="filter-Location">
            <option value="">ubicacion</option>
            <option value="remoto">remoto</option>
            <option value="cdmx">Ciudad de mexico</option>
            <option value="Guadalajara">Guadalajara</option>
            <option value="monterrey">Monterrey</option>
            <option value="barcelona">Barcelona</option>
          </select>
          <select name={idExperienceLevel} id="filter-experience-level">
            <option value="">Nivel de experiencia</option>
            <option value="junior">Junior</option>
            <option value="mid">Mid-level</option>
            <option value="senior">Senior</option>
            <option value="lead">lead</option>
          </select>
        </div>
      </form>
    </section>
  );
}

export default JobSearch;
