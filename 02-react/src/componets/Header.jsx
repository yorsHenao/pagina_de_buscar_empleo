import { Link } from "./link.jsx"

export function Header() {
    return (
        <header>
    
            <h1>DevJobs</h1>

            <nav>
                <Link href="/">Inicio</Link>
                <Link href="/search">Empleos</Link>
                <Link href="">Empresas</Link>
                <Link href="">Salarios</Link>   
                <Link href="/contact">Contacto</Link>
            </nav>

            <div>
                <devjobs-avatar
                service="facebook"
                username="yorscastiblancohenao"
                size="34"
                />

            <Link href="">Subir CV</Link>
            </div>
        </header>
        
    )
}

export default Header