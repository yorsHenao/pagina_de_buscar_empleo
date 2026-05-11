const container = document.querySelector(".jobs-listings") //-> capturamos el elemento

fetch("./data.json") // -> fetch hace una petición
    .then((response) =>{ // ->y entonces (.then) cuando tengas la respuesta
        return response.json(); // -> me devuelva y me transforme los datos en un archivo json
    })
    .then((jobs) =>{ // -> y entonces (.then)
        jobs.forEach(job =>{// para cada uno de los jobs, recuperados
            const article = document.createElement("article");//creamos un article html
            article.className = "job-listing-card"

            article.dataset.location = job.data.location
            article.dataset.experience = job.data.experience
            article.dataset.technology = job.data.technology

            article.innerHTML = `<div>
                <h3>${job.titulo}</h3>
                <small>${job.empresa} | ${job.ubicacion}</small>
                <p>${job.descripcion}
                </p>
                </div>
                <button class="button-apply-job">Aplicar</button>`

            container.appendChild(article) //-> le decimos al elemento que añada este article
        })
    })
