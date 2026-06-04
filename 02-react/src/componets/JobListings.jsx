import { JobCard } from "./JobCard.jsx"

function JobListings({ jobs }) {
    return (
        <section>
          <h2 style={{textAlign: "center"}}>Resultados de búsqueda</h2>

          <div className="jobs-listings">
            {
              jobs.length === 0 && <p style={{textAlign: "center", padding: "1rem", textWrap: "balance"}}>No se encontraron empleos que coincidan con la busqueda</p>
            }
            {/* Se insertan los empleos dinamicamente */}
            {jobs.map(job => (
              <JobCard key={job.id} job= {job} />
            ))}
          </div>
        </section>
    )
}

export default JobListings