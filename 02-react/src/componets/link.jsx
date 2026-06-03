import { useRouter } from "../hooks/useRouter.jsx";

export function Link({href, children, ...restOfProps}) {
    const { navigateTo, currentPath } = useRouter(); //navigato para cambiar de pagina y currentPath para saber en que pagina estoy ahora
                                                

    const isActive = currentPath === href;
    //si la pagina actual es igual al href del link, entonces el link esta activo
    //si no false


    const handleClick = (event) => {
        event.preventDefault();
        navigateTo(href);
    }

    return (
        <a href={href} {...restOfProps} 
        onClick={handleClick}
        className={isActive ? "active" : ""}>
        {children}
        </a>
    )
}
        