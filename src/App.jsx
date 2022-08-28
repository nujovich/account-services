
function App() {

  return (
    <div className="App">
    <header>
      <h2 className="logo">Marcos | Agustín</h2>
      <input type="checkbox" id="check-button"></input>
      <label htmlFor="check-button" className="hamburguer-icon">
      <iconify-icon icon="eva:menu-outline" width="40" height="40"></iconify-icon>
      </label>
      <nav className="menu">
        <a href="#">Sobre Nosotros</a>
        <a href="#">Servicios</a>
        <a href="#">Clientes</a>
        <a href="#">Contacto</a>
      </nav>
      <label htmlFor="check-button" className="cross-icon">
      <iconify-icon icon="codicon:chrome-close" width="40" height="40"></iconify-icon>
      </label>
    </header>
    <section className="banner-section">
      <div className="banner-container">
        <h2>Soluciones Contables</h2>
        <span>por Marcos Markocic y Agustín Rodríguez Otero</span>
      </div>
    </section>
    </div>
  )
}

export default App
