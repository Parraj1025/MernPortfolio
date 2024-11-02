import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './components/Header.jsx'
import Navigation from './components/NavBar.jsx'
import AboutMe from './components/AboutJuan.jsx'
import ProjectCarousel from './components/Carousel.jsx'

createRoot(document.getElementById('root')).render(
  <>
    <Header/>
    <Navigation/>
    <AboutMe/>
    <ProjectCarousel/>
  </>
)
