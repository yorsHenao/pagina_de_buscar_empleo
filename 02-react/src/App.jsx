import Header from "./componets/Header.jsx"
import Footer from "./componets/Footer.jsx"
import JobSearch from "./componets/JobSearch.jsx"
import JobListings from "./componets/JobListings.jsx"
import Pagination from "./componets/Pagination.jsx"

function App() {
  return (
    <>
      <Header />

      <main>
        <JobSearch />

        <JobListings />

        <Pagination/>
      </main>
      <Footer />
    </>
  )
}

export default App 
