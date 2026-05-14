function Pagination ({currentPage = 1, totalPages = 5}) {
  //generar un array con el numero de paginas a mostrar
  const pages = Array.from({length: totalPages}, (_, i) => i + 1)

  const isFirstPage = currentPage === 1 // indica si estamos en la primera pagina
  const isLastPage = currentPage === totalPages // indica si estamos en la ultima pagina

  const styleLPrevButton = isFirstPage ? {pointerEvents: 'none', opacity: 0.5} : {}
  const styleNextButton = isLastPage ? {pointerEvents: 'none', opacity: 0.5} : {}


    return (
        <nav className="pagination">
          {
            //esto es un rendeizado condicional, si no es la primera pagina se muestra el boton de anterior
            !isFirstPage && (
              <a href="#" style={styleLPrevButton}>
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
              href="#"
              className={currentPage === page ? 'is-active' : ''}
            >
              {page}
            </a>
          ))}

          {
            !isLastPage && (
              <a href="#" style={styleNextButton}>
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