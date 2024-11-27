import React from "react";
import { Container, Col, Row } from 'react-bootstrap'
import { Carousel } from "react-bootstrap";

function DBCarousel() {
    return (
        <Container>
                <Carousel fade data-bs-theme="dark" className="w-100" >
                    <Carousel.Item style={{display:'flexbox', marginTop:'5%', alignItems:'center'}} interval={20000}> 
                        <div style={{display:'flex', justifyContent:'center', marginBottom:'5%'}}> 
                        <h2 style={{textAlign:'center'}}> Clean and Maintainable Codebase: Implemented well-structured routes and functions for efficient updates and modifications. </h2>
                         </div>
                         <div style={{display:'flex', justifyContent:'center'}}>
                        <img 
                        src="./videos/MONGODB/ROUTES.png"
                        style={{ width:'70%'}}
                        />
                        </div>
                    </Carousel.Item>
                    <Carousel.Item style={{display:'flexbox', marginTop:'5%', alignItems:'center'}} interval={20000}>
                        <div style={{display:'flex', justifyContent:'center', marginBottom:'5%'}}>
                            <h2 style={{textAlign:'center'}}> Scalable Backend Architecture: Designed a modular backend architecture with clear separation of concerns. </h2>
                            </div>
                            <div style={{display:'flex', justifyContent:'center'}}>
                            <img 
                        src="./videos/MONGODB/USERFUNCTIONS.png"
                        style={{ width:'70%'}}
                        />
                        </div>
                    </Carousel.Item>
                    <Carousel.Item style={{display:'flexbox', marginTop:'5%', alignItems:'center'}} interval={20000}>
                        <div style={{display:'flex', justifyContent:'center', marginBottom:'5%'}}>
                            <h2 style={{textAlign:'center'}}>Robust Data Modeling: Utilized MongoDB to create a flexible and efficient data model. </h2>
                        </div>
                        <div style={{display:'flex', justifyContent:'center'}}>
                        <img 
                        src="./videos/MONGODB/POSTMODEL.png"
                        style={{ width:'70%'}}
                        />
                        </div>
                    </Carousel.Item>
                </Carousel>
        </Container>
    )
}

export default DBCarousel