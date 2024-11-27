import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './components/Header.jsx'
import Navigation from './components/NavBar.jsx'
import ProjectAccordion from './components/ProjectAccordion.jsx'
import { Row, Col, Container } from 'react-bootstrap'
import Footer from './components/footer.jsx'

createRoot(document.getElementById('root')).render(
  <Container fluid style={{ width: '100vw', height: '100%', backgroundColor: 'rgb(3, 122, 104)' }}>
    <Header />
<Row style={{width:'100vw', backgroundColor:'rgb(102, 103, 105)', border:'2px, solid,black', padding:'1%'}}>
  <Col md={5}>
  <h3 style={{padding:'3%', color:'white'}} >Juan Parra -Full Stack Engineer</h3>
  </Col>
  <Col style={{}}>
    <Navigation />
    </Col>
    </Row>
  <Row style={{ backgroundImage:'url("./img/fancy.png")', backgroundColor:'rgb(3, 122, 104)', backgroundSize:'cover', backgroundPosition:'center',textAlign: 'center', width: '100vw', height:'100%', justifyContent:'center', color:'white', border:'2px, solid, rgb(102, 103, 105) ',}}>
         <h3 style={{ width:'50%', height:'fit-content', border:'2px,solid,rgb(	206, 220, 0)', margin:'5%'}}> Project Showcase </h3>
       <Row style={{ height:'10%', paddingBottom:'3%'}}>
        <h6 style={{}}> Immerse yourself in user-centric web experiences. Explore projects built with MERN, prioritizing seamless interactions and intuitive design. </h6>
        </Row>
        <ProjectAccordion />
  </Row>
  <Row  style={{height:'fit-content', textAlign:'center', backgroundColor:'rgb(3, 122, 104)', color:'white'}}>
          <Footer/>
        </Row>
  </Container>
)
