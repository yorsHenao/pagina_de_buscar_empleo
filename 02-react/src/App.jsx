import Header from "./componets/Header.jsx"
import Footer from "./componets/Footer.jsx"
import JobSearch from "./componets/JobSearch.jsx"
import JobListings from "./componets/JobListings.jsx"
import Pagination from "./componets/Pagination.jsx"

function App() {
  const handlePageChange = (page) => {
    console.log("cambiando la pagina", page)
  }
  return (
    <>
      <Header />

      <main>
        <JobSearch />

        <JobListings />

        <Pagination currentPage={4} totalPages={5}  onPageChange={handlePageChange}/>
      </main>
      <Footer />
    </>
  )
}

export default App 
