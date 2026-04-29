const filter_location = document.querySelector("#filter-Location")//Filtro de location
const filter_technology = document.querySelector("#filter-technology")//Filtro technology
const filter_experience = document.querySelector("#filter-experience-level")//Filtro de experience



//Filtro de location

filter_location.addEventListener("change", () => {
    const tarjeta_seleccionada = document.querySelectorAll(".job-listing-card")
    const valor_tarjeta = filter_location.value // -> esto nos trae el elemento seleccionado

    tarjeta_seleccionada.forEach(tarjeta => {
        const location = tarjeta.dataset.location // -> en cada vuelta guarda el elemento encontrado en cada tarjeta
        const isShown = valor_tarjeta === "" || valor_tarjeta === location
        tarjeta.classList.toggle("is-hidden", !isShown)

    })
})



// filtro technology

filter_technology.addEventListener("change", () => {
    const valor_tarjeta = filter_technology.value // -> esto nos trae el elemento seleccionado

    tarjeta_seleccionada.forEach(tarjeta => {
        const technology = tarjeta.dataset.technology // -> en cada vuelta guarda el elemento encontrado en cada tarjeta
        const isShown = valor_tarjeta === "" || valor_tarjeta === technology
        tarjeta.classList.toggle("is-hidden", !isShown)

    })
})



filter_experience.addEventListener("change", () => {
    const valor_tarjeta = filter_experience.value



    tarjeta_seleccionada.forEach(tarjeta => {
        const experience = tarjeta.dataset.experience
        const isShown = valor_tarjeta === "" || valor_tarjeta === experience
        tarjeta.classList.toggle("is-hidden", !isShown) //!isShown es false


    })
})

//Otros metodos para filtros de busqueda
/* 
filtros usando js y css

//filtro ubicación

//buscamos en nuestro select y tomamos el id, lo guardamos en la const select
const filter = document.querySelector("#filter-Location")
//             ^^^^^^^  ^^^^^^^^^^^^ ^^^^^^^^^^^^^^^^^^^^^
//    html   / metodo que busca elementos   / criterio de busqueda
//                             
// no necesita event porque ya sabe qué elemento cambió
filter.addEventListener("change",() => {
// se queda vigilando la const filter, cuando cambiemos el valor del filtro
//ejecuta lo que esta dentro de la función 


    const valorSeleccionado = filter.value 
    //cuando el usuario cambiar el select lo capturamos con la const valorSeleccionado
    //si tomamos el valor "remoto" se necesita para comparar con otras tarjetas 



    const tarjetas = document.querySelectorAll(".job-listing-card")
    //Trae todos los articles del HTMLAllCollection, para poder recorrelos uno por uno
    //usamos el querySelectorAll para esto, sin esto no podemos comparar 




     //ciclo forEach
   
    tarjetas.forEach(tarjeta => {
     // Reccore cada tarjeta una por una, En cada vuelta "tarjeta" (variable) representa
    //la tarjeta actual 

        if(valorSeleccionado === "") {
            tarjeta.classList.remove("oculto")
        //Si el usuario no escogio ninguna opción, muestra todas las tarjetas
        //quitando la etiqueta invisible 



        }else if (tarjeta.dataset.location === valorSeleccionado){
            tarjeta.classList.remove("oculto")
        // Si la ubicación de esta tarjeta coincide con la que el usuario escogio
        //la muestra 

        }else {
            tarjeta.classList.add("oculto")
        // Si no coincide, muestra la etiqueta invisible 
        }
    })
})

//Filtros de Tecnologia



 const filter_technology = document.querySelector("#filter-technology")

filter_technology.addEventListener("change",() => {
     console.log("cambió:", filter_technology.value)
    const valorSeleccionado = filter_technology.value
    const tarjetas = document.querySelectorAll(".job-listing-card")

    //ciclo for
    tarjetas.forEach(tarjeta => {
        if(valorSeleccionado === "") {
            tarjeta.classList.remove("oculto")
        }else if (tarjeta.dataset.technology === valorSeleccionado){
            tarjeta.classList.remove("oculto")
        }else {
            tarjeta.classList.add("oculto")
        }
    })
}) 



//filtro experiencia
const filter_experience = document.querySelector("#filter-experience-level")

filter_experience.addEventListener("change",() => {
    const valorSeleccionado = filter_experience.value
    const tarjetas = document.querySelectorAll(".job-listing-card")

    
    tarjetas.forEach(tarjeta => {
        if(valorSeleccionado === "") {
            tarjeta.classList.remove("oculto")
        }else if (tarjeta.dataset.experience === valorSeleccionado){
            tarjeta.classList.remove("oculto")
        }else {
            tarjeta.classList.add("oculto")
        }
    })
})

----------------------------------------------------------------------------------------------
// Tercera forma de aplicar filtros

//Filtro de location

filter_location.addEventListener("change", () => {
    const valor_tarjeta = filter_location.value // -> esto nos trae el elemento seleccionado

    tarjeta_seleccionada.forEach(tarjeta => {
        const location = tarjeta.dataset.location // -> en cada vuelta guarda el elemento encontrado en cada tarjeta

        if(valor_tarjeta === "" || valor_tarjeta === location) {
            tarjeta.classList.remove("is-hidden")

        }else {
            tarjeta.classList.add("is-hidden")
        }
    })
})




// filtro technology

filter_technology.addEventListener("change", () => {
    const valor_tarjeta = filter_technology.value // -> esto nos trae el elemento seleccionado

    tarjeta_seleccionada.forEach(tarjeta => {
        const technology = tarjeta.dataset.technology // -> en cada vuelta guarda el elemento encontrado en cada tarjeta

        if(valor_tarjeta === "" || valor_tarjeta === technology) {
            tarjeta.classList.remove("is-hidden")

        }else {
            tarjeta.classList.add("is-hidden")
        }
    })
})

 //filtro experiencia

filter_experience.addEventListener("change", () => {
    const valor_tarjeta = filter_experience.value


    tarjeta_seleccionada.forEach(tarjeta => {
        const experience = tarjeta.dataset.experience

        if (valor_tarjeta === "" || valor_tarjeta === experience) {
            tarjeta.classList.remove("is-hidden")

        }else {
            tarjeta.classList.add("is-hidden")
        }
    })
}) 


 */




