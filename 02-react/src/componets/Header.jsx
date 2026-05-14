function Header() {
    return (
        <header>
            <h1>DevJobs</h1>

            <nav>
                <a href="./index.html">Inicio</a>
                <a href="./empleos.html">Empleos</a>
                <a href="">Empresas</a>
                <a href="">Salarios</a>
            </nav>

            <div>
                <devjobs-avatar
                service="facebook"
                username="yorscastiblancohenao"
                size="34"
                />

            <a href="">Subir CV</a>
            </div>
        </header>
    )
}

export default Header