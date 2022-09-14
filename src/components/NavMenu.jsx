export const NavMenu = ({style, setRightProp}) => {
    return (
        <nav className="menu" style={style}>
            <ul className="menu-items">
                <li>
                    <a href="#about-us-section" className="menu-link" onClick={setRightProp}>Sobre Nosotros</a>
                </li>
                <li>
                    <a href="#services-section" className="menu-link" onClick={setRightProp}>Servicios</a>
                </li>
                <li>
                    <a href="#contact-section" className="menu-link" onClick={setRightProp}>Contacto</a>
                </li>
            </ul>
            <label htmlFor="check-button" className="cross-icon">
                <iconify-icon icon="codicon:chrome-close" width="40" height="40"></iconify-icon>
            </label>
        </nav>
    )
}