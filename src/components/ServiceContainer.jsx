export const ServiceContainer = () => {
    return (
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
    )
}