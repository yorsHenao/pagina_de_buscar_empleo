import { useState } from "react";
import Header from "./componets/Header.jsx";
import Footer from "./componets/Footer.jsx";
import JobSearch from "./componets/JobSearch.jsx";
import JobListings from "./componets/JobListings.jsx";
import Pagination from "./componets/Pagination.jsx";
import jobsData from "./data.json";

const RESULTS_PER_PAGE = 5;

function App() {
  const [filters, setFilters] = useState({
    
      search: "",
      technology: "",
      location: "",
      experienceLevel: "" 
    });
  const [textToFilter, setTextToFilter] = useState("");
  const [currentPage, setCurrentPage] = useState(1); //pagina actual

  const jobsFilterByFilter = jobsData.filter(job => {
    return (
      (filters.technology === "" || job.data.technology === filters.technology)
      
    )
  });

  const jobsWithTextFilter = textToFilter === ""
      ? jobsFilterByFilter
      : jobsFilterByFilter.filter((job) => {
          return job.titulo.toLowerCase().includes(textToFilter.toLowerCase()); //busqueda de texto en minuscula
        });

  const totalPages = Math.ceil(jobsWithTextFilter.length / RESULTS_PER_PAGE); //calcular el total de paginas

  const pagedResults = jobsWithTextFilter.slice(
    (currentPage - 1) * RESULTS_PER_PAGE, // pagina 1 -> 0, pagina 1 -> 5, pagina 2 -> 10
    currentPage * RESULTS_PER_PAGE, // pagina 1 -> 5, pagina 2 -> 10
  );
  const handlePageChange = (page) => {
    setCurrentPage(page); //actualizar la pagina actual
  };

  const handleSearch = (filters) => {
    setFilters(filters)
    setCurrentPage(1)
  };



  const handleTextFilter = (newTextFilter) => {
    setTextToFilter(newTextFilter);
    setCurrentPage(1);
  };

  return (
    <>
      <Header />

      <main>
        <JobSearch onSearch={handleSearch} onTextFilter={handleTextFilter} />

        <JobListings jobs={pagedResults} />

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </main>
      <Footer />
    </>
  );
}

export default App;
