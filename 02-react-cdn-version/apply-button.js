const jobslistingsSection = document.querySelector(".jobs-listings")

// 2. // necesita event porque no sabe dónde se hizo clic
jobslistingsSection.addEventListener("click", function (event) {

    const element = event.target  // event le dice "el clic fue aquí"

    // 4. Verificamos que el click fue en un botón de aplicar
    // Si fue en otro elemento de la tarjeta, no hacemos nada
    if (element.classList.contains("button-apply-job")) {
        element.textContent = "Aplicado"        // Cambia el texto
        element.classList.add("is-applied")     // Cambia el color (CSS)
        element.disabled = true                 // Desactiva el botón
    }
})


//otros metodos de botones
/* //funcion de botones



//FORMA 1

//Esto solo aplica para un boton, si agregamos este evento a mas botones 
//no va a funcionar

        const boton = document.querySelector('#boton-importante')
        boton.addEventListener("click", () => {
            alert("Gracias por tu interes. Pronto nos comunicaremos contigo")
        }) 
            



        //IMPORTANTE, SIEMPRE LLAMAR LA CLASE CON EL .
        //SI ES ID ES CON #
        //SI NO LO TIENE NO FUNCIONARA


// FORMA 2
const botones = document.querySelectorAll(".button-apply-job")
//querySelectorAll devuelve una lista de elementos

//botones recibe ahora un metodo llamado forEach
//permite recibir una función que se itera en todos los botones

botones.forEach(boton => {
    boton.addEventListener('click', () => {
    boton.textContent = "Aplicado"
    boton.classList.add('is-applied')
    boton.disabled = true
})
}) */
