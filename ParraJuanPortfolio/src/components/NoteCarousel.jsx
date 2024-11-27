import React from "react";
import { Container, Col, Row } from 'react-bootstrap'
import { Carousel } from "react-bootstrap";

function NoteCarousel() {
    return (
        <Container>
                <Carousel fade data-bs-theme="dark" className="w-100" >
                    <Carousel.Item style={{display:'flexbox', marginTop:'5%', alignItems:'center'}} interval={20000}> 
                        <div style={{display:'flex', justifyContent:'center', marginBottom:'5%'}}> 
                        <h2 style={{textAlign:'center'}}> Note Taker </h2>
                         </div>
                         <div style={{display:'flex', justifyContent:'center'}}>
                        <video 
                        autoPlay={true}
                        loop={true}
                        src="./videos/Notes/NewNote.mov"
                        style={{ width:'70%'}}
                        />
                        </div>
                    </Carousel.Item>
                    <Carousel.Item style={{display:'flexbox', marginTop:'5%', alignItems:'center'}} interval={20000}>
                        <div style={{display:'flex', justifyContent:'center', marginBottom:'5%'}}>
                            <h2 style={{textAlign:'center'}}> Weather App  </h2>
                            </div>
                            <div style={{display:'flex', justifyContent:'center'}}>
                        <img
                        src="./img/WeatherSc.png"
                        autoPlay={true}
                        loop={true}
                        style={{ width:'70%'}}
                        />
                        </div>
                    </Carousel.Item>
                    <Carousel.Item style={{display:'flexbox', marginTop:'5%', alignItems:'center'}} interval={20000}>
                        <div style={{display:'flex', justifyContent:'center', marginBottom:'5%'}}>
                            <h2 style={{textAlign:'center'}}> readME generator (internal project management tool)</h2>
                        </div>
                        <div style={{display:'flex', justifyContent:'center'}}>
                        <video
                        src="./videos/ReadMeGen.mov"
                        autoPlay={true}
                        loop={true}
                        style={{ width:'70%'}}
                        />
                        </div>
                    </Carousel.Item>
                </Carousel>
        </Container>
    )
}

export default NoteCarousel