function Pagination ({currentPage = 1, totalPages = 5, onPageChange} ) {
  //generar un array con el numero de paginas a mostrar
  const pages = Array.from({length: totalPages}, (_, i) => i + 1)

  const isFirstPage = currentPage === 1 // indica si estamos en la primera pagina
  const isLastPage = currentPage === totalPages // indica si estamos en la ultima pagina

  const styleLPrevButton = isFirstPage ? {pointerEvents: 'none', opacity: 0.5} : {}
  const styleNextButton = isLastPage ? {pointerEvents: 'none', opacity: 0.5} : {}


  const handlePrevClick = (event) => {
    event.preventDefault() // evitar que el enlace navegue a otra pagina
    if (isFirstPage == false) {
      onPageChange(currentPage - 1) // llamar a la funcion de cambio de pagina con la pagina anterior
    }
  }

  const handleNextClick = (event) => {
    event.preventDefault() // evitar que el enlace navegue a otra pagina
    if (isLastPage == false) {
      onPageChange(currentPage + 1) // llamar a la funcion de cambio de pagina con la pagina siguiente
    }
  }

  const handlePageChange = (event) => {
    event.preventDefault() // evitar que el enlace navegue a otra pagina
    const page = Number(event.target.dataset.page) // obtener la pagina seleccionada del atributo data-page
    onPageChange(page) // llamar a la funcion de cambio de pagina con la pagina seleccionada
  } 


    return (
        <nav className="pagination">
          {
            //esto es un rendeizado condicional, si no es la primera pagina se muestra el boton de anterior
            !isFirstPage && (
              <a href="#" style={styleLPrevButton} onClick={handlePrevClick}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-left"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M15 6l-6 6l6 6" />
            </svg>
          </a>
            )
          }
          
          
          
          {pages.map(page => (
            <a
              key={page}// key es un identificador unico
              data-page={page}
              href="#"
              className={currentPage === page ? 'is-active' : ''}
              onClick={handlePageChange}
            >
              {page}
            </a>
          ))}

          {
            !isLastPage && (
              <a href="#" style={styleNextButton} onClick={handleNextClick}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M9 6l6 6l-6 6" />
            </svg>
          </a>
            )
          }
          
        </nav>

    )
}

export default Pagination