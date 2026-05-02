//busqueda empleados

const searchForm = document.querySelector("#empleos-search-form")
const searchInput = searchForm.querySelector("input")

searchForm.addEventListener("submit", () => {
    event.preventDefault() // previene que la pagina se recargue cuando el usuario hace submit
    
    const tarjeta_seleccionada = document.querySelectorAll(".job-listing-card")
    const valor_input = searchInput.value.toLowerCase() // convierte texto en minuscula

    tarjeta_seleccionada.forEach(tarjeta => {
        const descripcion = tarjeta.textContent.toLowerCase()//-> textContent devuelve todo el texto visible del elemento como un string
       
        //¿el usuario no escribio nada? o ¿o la tarjeta coincide contiene lo que busco
        const isShow = valor_input === "" || descripcion.includes(valor_input)
        tarjeta.classList.toggle("is-hidden", !isShow)
    })
})




