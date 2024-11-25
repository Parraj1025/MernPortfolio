import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './components/Header.jsx'
import Navigation from './components/NavBar.jsx'
import ProjectAccordion from './components/ProjectAccordion.jsx'
import { Row, Col, Container } from 'react-bootstrap'
import AboutMe from './components/AboutJuan.jsx'

createRoot(document.getElementById('root')).render(
  <Container style={{ width: '100vw' }}>
    <Header />
    <Navigation />
    <Row style={{marginTop:'2%', marginBottom:'2%'}}>
      <Col style={{ marginTop: '2%', textAlign: 'end', width: '90vw' }}>
        <h4> Juan Parra</h4>
      </Col>
      <Col>
        <AboutMe />
      </Col>
    </Row>
    <Col style={{border:'2px, solid, black'}}>
    <Row style={{textAlign:'center', marginBottom:'2%', marginTop:'2%'}}>
      <h3>Favorite Projects </h3>
      <h6> Immerse yourself in user-centric web experiences. Explore projects built with MERN, prioritizing seamless interactions and intuitive design. </h6>
    </Row>
    <ProjectAccordion />
    </Col>
  </Container>
)
