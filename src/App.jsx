import Footer from "./components/Footer/Footer"
import { Navbar } from "./components/Navbar/Navbar"
import ScrollTop from "./components/ScrollTop/ScrollTop"
import About from "./pages/About/About"
import Contact from "./pages/contact/Contact"
import { Hero } from "./pages/Hero"
import Portfolio from "./pages/portfolio/Portfolio"
import Resume from "./pages/resume/Resume"
import Services from "./pages/services/Services"


function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Portfolio />
      <Services />
      <Resume />
      <Contact />
      <ScrollTop />
      <Footer />
      {/* <h1> HOLA MUNDO </h1> */}
    </>
  )
}

export default App
