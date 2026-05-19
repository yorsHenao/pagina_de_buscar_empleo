
export function JobCard ({ job }){
    return (
        <article 
        className="job-listing-card"
        data-modalidad={job.data.location}
        data-experience={job.data.experience}
        data-technology={job.data.technology}
        >
            <div>
                <h3>{job.titulo}</h3>
                <small>{job.empresa} - {job.ubicacion}</small>
                <p>{job.descripcion}</p>
            </div>
            <button 
            className="button-apply-job">Aplicar</button>
        </article>
    )  
}
