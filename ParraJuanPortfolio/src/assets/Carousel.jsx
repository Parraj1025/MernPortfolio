import React from "react";
import { Container, Col, Row } from 'react-bootstrap'
import { Carousel } from "react-bootstrap";

function NoteCarousel() {
    return (
        <Container>
                <Carousel fade data-bs-theme="dark" className="w-100" >
                    <Carousel.Item style={{display:'flexbox', marginTop:'5%', alignItems:'center'}} interval={20000}> 
                        <div style={{display:'flex', justifyContent:'center', marginBottom:'5%'}}> 
                        <h2 style={{textAlign:'center'}}> this application was built using Express, Postgres and Sequelize </h2>
                         </div>
                         <div style={{display:'flex', justifyContent:'center'}}>
                        <video 
                        autoPlay={true}
                        loop={true}
                        src="./videos/Notes/LaunchNotes.mov"
                        style={{ width:'70%'}}
                        />
                        </div>
                    </Carousel.Item>
                    <Carousel.Item style={{display:'flexbox', marginTop:'5%', alignItems:'center'}} interval={20000}>
                        <div style={{display:'flex', justifyContent:'center', marginBottom:'5%'}}>
                            <h2 style={{textAlign:'center'}}>It takes input data and stores it in a postgres server. Data is able to be created, retrieved, and deleted</h2>
                            </div>
                            <div style={{display:'flex', justifyContent:'center'}}>
                        <video
                        src="./videos/Notes/NewNote.mov"
                        autoPlay={true}
                        loop={true}
                        style={{ width:'70%'}}
                        />
                        </div>
                    </Carousel.Item>
                    <Carousel.Item style={{display:'flexbox', marginTop:'5%', alignItems:'center'}} interval={20000}>
                        <div style={{display:'flex', justifyContent:'center', marginBottom:'5%'}}>
                            <h2 style={{textAlign:'center'}}> Deployable locally (internal project management tool) or on web service like Render (open blog)</h2>
                        </div>
                        <div style={{display:'flex', justifyContent:'center'}}>
                        <video
                        src="./videos/Notes/DeleteNote.mov"
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