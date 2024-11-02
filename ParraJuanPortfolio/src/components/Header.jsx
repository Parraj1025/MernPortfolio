import React from "react";
import { Container, Row, Col } from 'react-bootstrap'

function Header() {
  return (
    <>
    <Container>
      <Row>
        <Col className="mx-auto text-center" md={12}>
          <h1>
          Building Scalable Web Apps with MERN | Full-Stack Engineer
          </h1> 
        </Col>
        <Col className="mx-auto text-center" md={12}>
         <h2> Juan Parra</h2>
        </Col>
      </Row>
      </Container>
    </>
  )
}

export default Header