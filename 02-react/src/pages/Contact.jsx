import {useState} from "react";


export function ContactPage() {
    const [nombre, setNombre] = useState("")
    const [apellido, setApellido] = useState("")
    const [email, setEmail] = useState("")
    const [mensaje, setMensaje] = useState("")

    const handleSubmit = () => {
        if (nombre === "") {
            alert("Por favor ingresa tu nombre")
            return
        }
        if (apellido === "") {
            alert("Por favor ingresa tu apellido")
            return
        }
        if (email === "") {
            alert("Por favor ingresa tu email")
            return
        } else if (!email.includes("@")) {
            alert("Por favor ingresa un email válido")
            return
        }
        if (mensaje === "") {
            alert("Por favor ingresa tu mensaje")
            return 
        }

        alert("Mensaje enviado correctamente")
    }

    
    return (
        <main>
            <h2>Contacto</h2>
            <p>Si tienes alguna pregunta o sugerencia, no dudes en contactarnos</p>
            <input value={nombre} onChange={(event) => setNombre(event.target.value)} placeholder="Nombre"/>
            <input value={apellido} onChange={(event) => setApellido(event.target.value)} placeholder="Apellido"/>
            <input value={email} onChange={(event) => setEmail(event.target.value)} placeholder="Email"/>
            <input value={mensaje} onChange={(event) => setMensaje(event.target.value)} placeholder="Mensaje"/>
            <button onClick={handleSubmit}>Enviar</button>
        </main>
    )
}