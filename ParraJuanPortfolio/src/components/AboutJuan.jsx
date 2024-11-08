import React, { useState } from 'react';
import { Button, Container, Modal } from 'react-bootstrap';

function AboutMe() {
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  return (
    <>
    <Container>
      <Button onClick={handleShow} style={{margin:'0', backgroundColor:"red", borderColor:"red"}}>   

        About Me
      </Button>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>About Me</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          I'm a dedicated Full Stack MERN Developer with a passion for crafting elegant and efficient web applications. I have a strong foundation in MongoDB, Express.js, React.js, and Node.js, and I'm always eager to learn new technologies.

          I'm excited to collaborate with talented teams and contribute to innovative projects. Let's build something great together!
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      </Container>
    </>
  );
}

export default AboutMe; 