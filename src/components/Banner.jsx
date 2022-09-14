import { ArrowButton } from "./ArrowButton"

export const Banner = () => {
    return (
        <section id="banner-section">
            <div className="banner-container">
                <h2>Soluciones Contables</h2>
                <p>por Marcos Markocic y Agustín Rodríguez Otero</p>
                <a href="#about-us-section">
                    <ArrowButton width="90" height="90" className="arrow-down" action="down"/>
                </a>
            </div>
        </section>
    )
}