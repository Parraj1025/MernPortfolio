import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function AboutMe() {
    return (
        <Container className="w-100">
            <h4><Row className="justify-content-center bg-light mx-auto" >ABOUT ME </Row></h4>
            <Row className="justify-content-center mx-auto">
                I'm a dedicated Full Stack MERN Developer with a passion for crafting elegant and efficient web applications. I have a strong foundation in MongoDB, Express.js, React.js, and Node.js, and I'm always eager to learn new technologies.

                My portfolio showcases 18+ projects, demonstrating my ability to build responsive, user-friendly, and scalable web solutions. I'm proficient in both frontend and backend development, and I have a keen eye for detail.

                I'm excited to collaborate with talented teams and contribute to innovative projects. Let's build something great together!
            </Row>
        </Container>

    )
}

export default AboutMe