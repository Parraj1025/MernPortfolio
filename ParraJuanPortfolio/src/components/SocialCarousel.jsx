import React from "react";
import { Container, Col, Row } from 'react-bootstrap'
import { Carousel } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function SocialCarousel() {
    return (
        <Container fluid>
            <Carousel fade data-bs-theme="dark" className="w-100" >
                <Carousel.Item style={{ display: 'flexbox', margin: '2%', alignItems: 'center', width:'100%'}} interval={20000}>
                    <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '3%' }}>
                        <h2 style={{ textAlign: 'center' }}>App Info </h2>
                    </div>
                    <Row style={{ width:'100%', justifyContent:'center'}}>
                    <Col md={6} xs={12} style={{justifyContent: 'end'}}>
                        <ul>
                        <h3 style={{marginBottom:'4%'}}>Technical Implementation</h3>
                            <h5> Frontend Development:</h5>
                            <li style={{marginBottom:'2%'}}>Built a user-friendly interface using React and Vite.</li>  
                            <h5> Backend Development:</h5>
                            <li style={{marginBottom:'2%'}}> Developed a robust backend using Node.js and Express.js to handle server-side logic and data processing.</li>                          
                            <h5>Database Design:</h5>
                            <li style={{marginBottom:'2%'}}> Implemented a MongoDB database to securely store and manage user data.</li>
                            <h5> Deployment:</h5>
                            <li style={{marginBottom:'2%'}}> Deployed the application to Render for seamless user access.</li>
                         </ul>
                    </Col>
                    <Col md={6} xs={12} style={{justifyContent:'end'}}>
                        <ul>
                            <h3 style={{marginBottom:'4%'}}>Highlights</h3>
                            <h5>Authentication:</h5> <li style={{marginBottom:'2%'}}>Implemented Google authentication using Firebase for secure user access.</li>         
                            <h5>Data Security:</h5>   <li style={{marginBottom:'2%'}}> Ensured data privacy through data hashing and protected routes.</li>                  
                            <h5> User Experience:</h5>   <li style={{marginBottom:'2%'}}> Built a responsive and engaging user interface leveraging React and Bootstrap frameworks</li>
                          </ul>
                    </Col>
                    </Row>
                </Carousel.Item>
                <Carousel.Item style={{ display: 'flexbox', margin: '2%', alignItems: 'center', width:'100%'}} interval={20000}>
                    <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '3%' }}>
                        <h2 style={{ textAlign: 'center' }}>Styled using React-Bootstrap</h2>
                    </div>
                    <h3 style={{ textAlign: 'center', marginBottom: '3%' }}> Responsive design suitable for all screen sizes</h3>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <video
                            src="./videos/Social/ResponsiveScreen.mov"
                            autoPlay={true}
                            playsinline={true}
                            loop={true}
                            style={{ width: '70%' }}
                        />
                    </div>
                </Carousel.Item>
                <Carousel.Item style={{ display: 'flexbox', margin: '2%', alignItems: 'center', width:'100%'}} interval={20000}>
                    <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '3%' }}>
                        <h2 style={{ textAlign: 'center' }}> Deployed on render with data store on Mongo DB Atlast</h2>
                    </div>
                    <Row style={{ textAlign: 'center', marginBottom: '3%' }}>
                        <div>
                            <h3> Key features:</h3>
                            <li> Seamless Authentication: Google Sign-In for easy and secure access.</li>
                            <li> Adaptive Design: Responsive interface for optimal user experience across devices.</li>
                            <li> Dynamic User Experience: Personalized home and profile pages tailored to individual needs.</li>
                        </div>
                    </Row>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <video
                            src="./videos/Social/GoogleSignIn.mov"
                            autoPlay={true}
                            loop={true}
                            playsinline={true}
                            style={{ width: '70%' }}
                        />
                    </div>
                </Carousel.Item>
            </Carousel>
        </Container>
    )
}

export default SocialCarousel