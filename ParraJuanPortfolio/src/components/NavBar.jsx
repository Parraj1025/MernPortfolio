import React from "react";
import { Container, Col, Row} from  'react-bootstrap'
import {Navbar, Nav} from 'react-bootstrap'


function Navigation() {
    return(
       <Container>
            <Navbar bg="light" >
                <Nav className=" w-100 ">
                    <Col style={{textAlign:"center"}}><Nav.Link href="https://www.linkedin.com/in/juan-parra-01a4a0113/" target="_blank"> LinkedIn</Nav.Link></Col>
                   <Col style={{textAlign:"center"}}> <Nav.Link href="https://github.com/Parraj1025?tab=repositories" target="_blank">GitHub</Nav.Link></Col>
                </Nav>
            </Navbar>
       </Container>
    )
}

export default Navigation