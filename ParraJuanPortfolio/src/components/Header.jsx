import React from "react";
import { Container, Row, Col } from 'react-bootstrap'
import AboutMe from "./AboutJuan";
import ContactMe from "./ContactMe";

function Header() {
  return (
    <Container style={{width:'100vw', marginBottom:'3%', marginTop:'2%'}} >
      <Row>
        <Col className="mx-auto text-center" md={12}>
          <h2>
          Building Scalable Web Apps with MERN
          </h2> 
          <h3>
          Full-Stack Engineer
          </h3>
        </Col>
      </Row>
      </Container>
  )
}

export default Header