
function App() {

  return (
    <div className="App">
    <header>
      <h2 className="lg-logo">Marcos | Agustín</h2>
      <h2 className="sm-logo">M | A</h2>
      <input type="checkbox" id="check-button"></input>
      <label htmlFor="check-button" className="hamburguer-icon">
        <iconify-icon icon="eva:menu-outline" width="40" height="40"></iconify-icon>
      </label>
      <nav className="menu">
        <ul className="menu-items">
          <li>
            <a href="#services-section" className="menu-link">Servicios</a>
          </li>
          <li>
            <a href="#" className="menu-link">Clientes</a>
          </li>
          <li>
            <a href="#" className="menu-link">Contacto</a>
          </li>
        </ul>
        
        <label htmlFor="check-button" className="cross-icon">
          <iconify-icon icon="codicon:chrome-close" width="40" height="40"></iconify-icon>
        </label>
      </nav>
    </header>
    <section id="banner-section">
      <div className="banner-container">
        <h2>Soluciones Contables</h2>
        <p>por Marcos Markocic y Agustín Rodríguez Otero</p>
        <a href="#about-us-section">
          <iconify-icon icon="bi:chevron-double-down" width="90" height="90"></iconify-icon>
      </a>
      </div>
    </section>
    <section id="about-us-section">
      <div className="about-us-container">
        <h2 className="about-us-title">¿Quiénes Somos?</h2>
        <p className="about-us-description">Somos un equipo con dinamismo y plena dedicación al cliente, abordando la actividad del mismo en su totalidad, brindando un servicio que va más allá de la liquidación impositiva</p>
        <h2 className="about-us-title">¿Cuál es nuestra misión?</h2>
        <p className="about-us-description">Ser una opción en cada problemática diaria, convirtiéndonos en un eslabón que suma a la perspectiva y al fortalecimiento diario del cliente.</p>
        <h2 className="about-us-title">¿Cuál es nuestro valor agregado?</h2>
        <p className="about-us-description">Aquel conformado por plena predisposición, dedicación y responsabilidad. Creemos en la importancia de la comunicación, y para ello brindamos canales personalizados para que nuestros clientes siempre tengan una rápida respuesta ante alguna necesidad</p>
      </div>
      <div className="profile-container">
        <div className="profile-element">
          <div className="image-container">
            <img className="profile-image" src="/assets/images/marcos-fake.jpg" alt="Marcos"></img>
          </div>
          <h3>Marcos Alberto Markocic</h3>
            <p>Contador Público, con especialidad en Costos y Gestión Empresarial, Rosarino, de 32 años, cursó su carrera de grado y posgrado en la Universidad Nacional de Rosario.</p>
        </div>
        <div className="profile-element">
        <div className="image-container">
            <img className="profile-image" src="/assets/images/agustin-fake.jpg" alt="Agustín"></img>
        </div>
          <h3>Agustín Rodríguez Otero</h3>
          <p>Contador Público, con especialidad en Costos y Gestión Empresarial, Rosarino, de 32 años, cursó su carrera de grado y posgrado en la Universidad Nacional de Rosario.</p>
        </div>
      </div>
    </section>
    <section id="services-section">
      <h2>Servicios</h2>
      <div className="services-container">
        <div className="services-element">
          <div className="icon-container">
            <iconify-icon icon="ic:baseline-account-balance-wallet" width="60" height="60"></iconify-icon>
          </div>
          <h3>Presentaciones impositivas</h3>
          <ul>
            <li>Impuestos municipales, provinciales y nacionales</li>
            <li>Regularización de Pasivos impositivos y Planes de pago</li>
          </ul>
        </div>
        <div className="services-element">
          <div className="icon-container">
            <iconify-icon icon="ic:baseline-account-balance" width="60" height="60"></iconify-icon>
          </div>
          <h3>Certificaciones personales para Organismos de Control</h3>
          <ul>
            <li>Certificaciones UIF Origen de fondos</li>
            <li>Manifestación de Bienes</li>
          </ul>
        </div>
        <div className="services-element">
          <div className="icon-container">
            <iconify-icon icon="ic:baseline-switch-account" width="60" height="60"></iconify-icon>
          </div>
          <h3>Balances contables para Sociedades Comerciales</h3>
          <p>Confección de documentos oficiales para avalar el estado financiero de tu empresa a nivel patrimonial y económico</p>
        </div>
        <div className="services-element">
        <div className="icon-container">
            <iconify-icon icon="fluent:receipt-add-24-filled" width="60" height="60"></iconify-icon>
          </div>
          <h3>Contabilidad Laboral</h3>
          <ul>
            <li>F931</li>
            <li>Liquidación de recibos de sueldo</li>
          </ul>
      </div>
      <div className="services-element">
        <div className="icon-container">
            <iconify-icon icon="map:courthouse" width="60" height="60"></iconify-icon>
          </div>
          <h3>Asesoramiento Contable-Judicial</h3>
          <ul>
            <li>Peritos contables de Parte</li>
          </ul>
      </div>
      <div className="services-element">
        <div className="icon-container">
            <iconify-icon icon="ic:baseline-switch-account" width="60" height="60"></iconify-icon>
          </div>
          <h3>Especialización en Sindicatura Concursal</h3>
          <p>Concurso Preventivo y Quiebra</p>
      </div>
      <div className="services-element">
        <div className="icon-container">
            <iconify-icon icon="carbon:calculator-check" width="60" height="60"></iconify-icon>
          </div>
          <h3>Especialización en Costos</h3>
          <ul>
            <li>Análisis de costos</li>
            <li>Gestión de información para la toma de decisiones</li>
          </ul>
        </div>
      </div>
    </section>
    <footer id="footer">
      <span>Hecho por</span>
      <a href="https://nujovich.github.io/portfolio">Nadia Ujovich</a>
      <span>2022</span>
    </footer>
    </div>
  )
}

export default App
