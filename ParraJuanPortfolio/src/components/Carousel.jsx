import React from "react";
import {Container, Col, Row} from 'react-bootstrap'
import { Carousel } from "react-bootstrap";

function ProjectCarousel() {
    return(
        <Carousel>
            <Carousel.Item>
                <Carousel.Caption>
                    <h3>Juanchos app</h3>
                    <p> i did this one</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default ProjectCarousel