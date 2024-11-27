import React from "react";
import { Container, Col, Row, Button} from  'react-bootstrap'
import {Navbar, Nav} from 'react-bootstrap'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

import AboutMe from "./AboutJuan";


function Navigation() {
    return(

            <Navbar style={{ padding:'1%',justifyContent:'end', width:'100%',}}>
                <Nav>
                   <div style={{marginLeft:'3%'}}>
                   <AboutMe/>
                   </div>
                <Button href="https://www.linkedin.com/in/juan-parra-01a4a0113/" target="_blank" style={{backgroundColor:"rgb(3, 122, 104)", textAlign:"center", marginLeft:'2%', marginRight:'2%', border:'2px,solid,black'}}> <FontAwesomeIcon icon={faLinkedin} color="white" /> <p style={{margin:'0', color:'white'}}>LinkedIn</p> </Button>
                <Button href="https://github.com/Parraj1025?tab=repositories" target="_blank" style={{textAlign:"center", backgroundColor:'rgb(3, 122, 104)',border:'2px,solid,black', marginRight:'2%'}}><FontAwesomeIcon icon={faGithub} color="white" />   <p style={{margin:'0', color:'white'}}>GitHub</p></Button>
                  
                  
                </Nav>
            </Navbar>

    )
}

export default Navigation