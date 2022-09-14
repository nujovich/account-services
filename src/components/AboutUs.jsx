export const AboutUs = () => {

    return (
        <section id="about-us-section">
            <div className="about-us-container">
                <h2 className="about-us-title">¿Quiénes Somos?</h2>
                <p className="about-us-description">Somos un equipo con dinamismo y plena dedicación al cliente, abordando la actividad del mismo en su totalidad, brindando un servicio que va más allá de la liquidación impositiva.</p>
                <h2 className="about-us-title">¿Cuál es nuestra misión?</h2>
                <p className="about-us-description">Ser una opción en cada problemática diaria, convirtiéndonos en un eslabón que suma a la perspectiva y al fortalecimiento diario del cliente.</p>
                <h2 className="about-us-title">¿Cuál es nuestro valor agregado?</h2>
                <p className="about-us-description">Aquel conformado por plena predisposición, dedicación y responsabilidad. Creemos en la importancia de la comunicación, y para ello brindamos canales personalizados para que nuestros clientes siempre tengan una rápida respuesta ante alguna necesidad.</p>
                <h2 className="about-us-title">¿Qué nos diferencia de la competencia?</h2>
                <p className="about-us-description">Somos contadores públicos recibidos en la ciudad de Rosario, con dedicación no solo en Gestión Empresarial, sino también en otras áreas contables.</p>
            </div>
            <div className="profile-container">
                <div className="profile-element">
                    <div className="image-container">
                        <img className="profile-image" src="/assets/images/marcos-fake.jpg" alt="Marcos"></img>
                    </div>
                    <h3>Marcos Alberto Markocic</h3>
                    <p>Especialista en Costos</p>
                </div>
                <div className="profile-element">
                    <div className="image-container">
                        <img className="profile-image" src="/assets/images/agustin.jpg" alt="Agustín"></img>
                    </div>
                    <h3>Agustín Rodríguez Otero</h3>
                    <p>Especialista en sindicatura concursal.</p>
                </div>
            </div>
        </section>
    )
}