import { useState } from "react"
import Header from "./componets/Header.jsx"
import Footer from "./componets/Footer.jsx"
import JobSearch from "./componets/JobSearch.jsx"
import JobListings from "./componets/JobListings.jsx"
import Pagination from "./componets/Pagination.jsx"
import jobsData from "./data.json"


const RESULTS_PER_PAGE = 5

function App() {
  const [currentPage, setCurrentPage] = useState(1) //pagina actual
  const totalPages = Math.ceil(jobsData.length / RESULTS_PER_PAGE) //calcular el total de paginas


  const  pagedResults = jobsData.slice(
    (currentPage -1) * RESULTS_PER_PAGE, // pagina 1 -> 0, pagina 1 -> 5, pagina 2 -> 10
    currentPage * RESULTS_PER_PAGE // pagina 1 -> 5, pagina 2 -> 10
  )
  const handlePageChange = (page) => {
    console.log("cambiando la pagina", page)
    setCurrentPage(page) //actualizar la pagina actual
  }
  return (
    <>
      <Header />

      <main>
        <JobSearch />

        <JobListings jobs={pagedResults} />

        <Pagination currentPage={currentPage} totalPages={totalPages}  onPageChange={handlePageChange}/>
      </main>
      <Footer />
    </>
  )
}

export default App 
