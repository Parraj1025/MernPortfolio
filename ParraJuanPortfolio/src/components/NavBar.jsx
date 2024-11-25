import React from "react";
import { Container, Col, Row, Button} from  'react-bootstrap'
import {Navbar, Nav} from 'react-bootstrap'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'


function Navigation() {
    return(
        <Container>
            <Navbar bg="light" style={{width:'100%', marginTop:'2%', marginBottom:'3%'}} >
                <Nav className="w-100">
                    <Col style={{textAlign:"center", width:'50%'}}><Nav.Link href="https://www.linkedin.com/in/juan-parra-01a4a0113/" target="_blank"> <FontAwesomeIcon icon={faLinkedin}/>    LinkedIn</Nav.Link></Col>
                   <Col style={{textAlign:"center", width:'50%'}}> <Nav.Link href="https://github.com/Parraj1025?tab=repositories" target="_blank"><FontAwesomeIcon icon={faGithub}/>    GitHub</Nav.Link></Col>
                </Nav>
            </Navbar>
            </Container>
    )
}

export default Navigation