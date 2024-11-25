import React from "react";
import { Container, Col, Row } from 'react-bootstrap'
import { Carousel } from "react-bootstrap";

function SocialCarousel() {
    return (
        <Container>
            <Carousel fade data-bs-theme="dark" className="w-100" >
                <Carousel.Item style={{ display: 'flexbox', marginTop: '2%', alignItems: 'center' }} interval={20000}>
                    <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '3%' }}>
                        <h2 style={{ textAlign: 'center' }}> Built using Mongo, Express, React, and Node </h2>
                    </div>
                    <Row style={{textAlign:'center', marginBottom:'3%'}}>
                    <div>
                        <h3> Key features:</h3>
                        <li> Google Sign In (firebase)</li>
                        <li> Dynamic home/profile button</li>
                        <li> Responsive design</li>
                    </div>
                    </Row>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <video
                            autoPlay={true}
                            loop={true}
                            src="./videos/Social/GoogleSignIn.mov"
                            style={{ width: '70%' }}
                        />
                    </div>
                </Carousel.Item>
                <Carousel.Item style={{ display: 'flexbox', marginTop: '3%', alignItems: 'center' }} interval={20000}>
                    <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '3%' }}>
                        <h2 style={{ textAlign: 'center' }}>Styled using React-Bootstrap</h2>
                    </div>
                    <h3 style={{textAlign:'center', marginBottom:'3%'}}> Responsive design suitable for all screen sizes</h3>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <video
                            src="./videos/Social/dynamicscreen.mov"
                            autoPlay={true}
                            loop={true}
                            style={{ width: '70%' }}
                        />
                    </div>
                </Carousel.Item>
                <Carousel.Item style={{ display: 'flexbox', marginTop: '3%', alignItems: 'center' }} interval={20000}>
                    <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '3%' }}>
                        <h2 style={{ textAlign: 'center' }}> Deployed on render with data store on Mongo DB Atlast</h2>
                    </div>
                    <h3 style={{textAlign:'center',marginBottom:'3%'}}> Currently being used by trial group to further develop application </h3>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <img
                            src="./videos/Social/renderSC.png"
                            style={{ width: '70%' }}
                        />
                    </div>
                </Carousel.Item>
            </Carousel>
        </Container>
    )
}

export default SocialCarousel