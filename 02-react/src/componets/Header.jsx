function Header() {
    return (
        <header>
            <h1>DevJobs</h1>

            <nav>
                <a href="/">Inicio</a>
                <a href="/search">Empleos</a>
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