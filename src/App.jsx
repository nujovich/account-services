import { useEffect, useState } from "react"
import { AboutUs } from "./components/AboutUs"
import { ArrowButton } from "./components/ArrowButton"
import { Banner } from "./components/Banner"
import { Contact } from "./components/Contact"
import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { ServiceContainer } from "./components/ServiceContainer"

function App() {

  const [isArrowVisible, setArrowVisible] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if(window.scrollY > 350) {
              setArrowVisible(true)
            } else {
              setArrowVisible(false)
            }
        })
    }, [])

  const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}

  return (
    <div className="App">
      <a onClick={scrollToTop}>
        {isArrowVisible && (
          <ArrowButton width="40" height="40" className="arrow-up" action="up"/>
        )}
      </a>
      <Header/>
      <Banner/>
      <AboutUs/>
      <ServiceContainer/>
      <Contact/>
      <Footer/>
    </div>
    
  )
}

export default App
