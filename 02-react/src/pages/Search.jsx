import { useState, useEffect } from "react";
import JobSearch from "../componets/JobSearch.jsx";
import JobListings from "../componets/JobListings.jsx";
import Pagination from "../componets/Pagination.jsx";


const RESULTS_PER_PAGE = 5;

const useUserFilters = () => {
  const [filters, setFilters] = useState({
    // useState es un hook que nos permite visar el estado de un componente
    search: "",
    technology: "",
    location: "",
    experienceLevel: "",
  });
  const [textToFilter, setTextToFilter] = useState("");
  const [currentPage, setCurrentPage] = useState(1); // pagina actual

  const [jobs, setJobs] = useState([])
  const [total, setTotal] = useState(0)
  const [loading, setLoading] = useState(true)


  useEffect(() => {
    async function fetchJobs() {
      try {
        setLoading(true);
        //parametros de filtro
        const params = new URLSearchParams()
        if (textToFilter) params.append("text", textToFilter)
        if (filters.technology) params.append("technology", filters.technology)
        if (filters.location) params.append("type", filters.location)
        if (filters.experienceLevel) params.append("level", filters.experienceLevel)

          // paginacion
          const offset = (currentPage - 1) * RESULTS_PER_PAGE
          params.append("limit", RESULTS_PER_PAGE)
          params.append("offset", offset)

          const queryParams = params.toString()

        const response = await fetch(`https://jscamp-api.vercel.app/api/jobs?${queryParams}`) // fetch es una funcion que nos permite hacer peticiones a una API
        const json = await response.json() // json es un formato de datos que se utiliza para intercambiar datos entre el cliente y el servidor

        setJobs(json.data);
        setTotal(json.total);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchJobs()
  }, [filters, textToFilter, currentPage]); //solo cuando cambien los filtros o el texto a filtrar, se ejecutara la funcion fetchJobs


  const totalPages = Math.ceil(total / RESULTS_PER_PAGE); // calcular el total de paginas

  

  const handlePageChange = (page) => {
    setCurrentPage(page); // actualizar la pagina actual
  };

  const handleSearch = (filters) => {
    setFilters(filters); // actualizar los filtros de busqueda
    setCurrentPage(1);
  };

  const handleTextFilter = (newTextFilter) => {
    setTextToFilter(newTextFilter);
    setCurrentPage(1);
  };

  return {
    total,
    loading,
    jobs,
    totalPages,
    currentPage,
    textToFilter,
    handlePageChange,
    handleSearch,
    handleTextFilter,
  };
};

export function SearchPages() {
  const {
    total,
    loading,
    jobs,
    totalPages,
    currentPage,
    textToFilter,
    handlePageChange,
    handleSearch,
    handleTextFilter,
  } = useUserFilters();


  useEffect(() => {
    document.title = `Resultados ${total}, pagina ${currentPage} - DevJobs`
  }, [total, currentPage]) 

  useEffect(() => {
    // nos permite ejecutar una funcion cada vez que el valor de currentPage o textToFilter cambie
    document.title = `Page ${currentPage}`;
  }, [currentPage, textToFilter]);

  useEffect(() => {
    // Suscripción a un evento
    const handleResize = () => {
      console.log("ventana redimensionada", window.innerWidth);
    };
    window.addEventListener("resize", handleResize);

    // Limpieza de la suscripción
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <main>
      <JobSearch onSearch={handleSearch} onTextFilter={handleTextFilter} />

      <section>
        {
          loading ?  <p>Cargando empleos... </p> : <JobListings jobs={jobs} />

        }

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
      </section>
    </main>
  );
}
