
class DevJobsAvatar extends HTMLElement { // -> definir un objeto de la familia HTML
    constructor(){
        super(); //-> llamar al constructor padre que es el HTMLElement, es obligatorio


        //attachShadow crea un shadow privado dentro del componente
        this.attachShadow({mode: 'open'}) // -> indicamos que es accesible desde js externo
    }


    //metodo para recuper url
    createUrl(service, username){

        return `https://unavatar.io/${service}/${username}`


    }


    //metodo render
    render(){
        

        // si this.getAttribute("service") devuelve null o undefine, entonces asigna el otro valor
        const  service = this.getAttribute("service") ?? "github" 
        const username = this.getAttribute("username") ?? "midudev"
        const size = this.getAttribute("size") ?? "24"

        const url = this.createUrl(service,username)



        this.shadowRoot.innerHTML =`
        <style>
        img {

          width: ${size}px;
          height: ${size}px;
          border-radius: 9999px;
        
        }
        </style>
        <img src= ${url} 
            alt="Avatar de ${username}"
            class="avatar"
            />
            
        ` 
        
    }

    connectedCallback() { //-> se usa para indicar que se active cuando el elemento aparece en el doom
                         // -> el componente desaparece cuando es removido del dom
        this.render()
    }
}

// es una api del navegador para registrar elementos personalizados
//el nombre debe tener un guion, es obligatorio
customElements.define('devjobs-avatar', DevJobsAvatar)