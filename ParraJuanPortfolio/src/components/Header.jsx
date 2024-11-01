import React from "react";
import { Container, Row, Col } from 'react-bootstrap'

function Header() {
  return (
    <>
    <Container>
      <Row>
        <Col className="mx-auto text-center" md={12}>
          <h2>
          Building Scalable Web Apps with MERN | Full-Stack Engineer
          </h2> 
        </Col>
        <Col className="mx-auto text-center" md={12}>
          Juan Parra
        </Col>
      </Row>
      </Container>
    </>
  )
}

export default Header