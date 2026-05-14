import Header from "./componets/Header"
import Footer from "./componets/Footer"
import JobSearch from "./componets/JobSearch"
import JobListings from "./componets/JobListings"
import Pagination from "./componets/Pagination"

function App() {
  return (
    <>
      <Header />

      <main>
        <JobSearch />

        <JobListings />

        <Pagination />
      </main>
      <Footer />
    </>
  )
}

export default App
