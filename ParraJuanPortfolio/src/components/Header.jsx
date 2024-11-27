import React from "react";
import { Container, Row, Col } from 'react-bootstrap'
import AboutMe from "./AboutJuan";
import ContactMe from "./ContactMe";

function Header() {
  return (
    
      <Row style={{height:'20%'}} >
        <Col className="mx-auto text-center"  style={{height:'100%',width:'100%', padding:'4%', backgroundImage:'url("./img/SmokyBackground.png")', color:"white", border:'3px, solid, black'}}>
          <h1>
          Building Scalable Web Apps with MERN
          </h1> 
        </Col>
      </Row>
  )
}

export default Header