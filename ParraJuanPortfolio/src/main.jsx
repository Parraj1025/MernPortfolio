import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './components/Header.jsx'
import Navigation from './components/NavBar.jsx'
import ProjectAccordion from './components/ProjectAccordion.jsx'

createRoot(document.getElementById('root')).render(
  <div style={{minWidth:'200px'}}>
    <Header/>
    <Navigation/>
    <ProjectAccordion/>
  </div>
)
