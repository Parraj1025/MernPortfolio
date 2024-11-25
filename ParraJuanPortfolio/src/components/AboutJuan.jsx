import React, { useState } from 'react';
import { Button, Container, Modal, Row } from 'react-bootstrap';

function AboutMe() {
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  return (
    <Container>
      <Button onClick={handleShow} style={{marginTop:'2%', backgroundColor:"red", borderColor:"red"}}>   
        About Me
      </Button>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Contact Information</Modal.Title>
        </Modal.Header>
        <Row style={{margin:'2%'}}>
        <p>
                        Phone Number: (407) 781-7287
                    </p>
                    <p>
                        Email: Parrajuan1025@gmail.com
                    </p>
        </Row>
        <Modal.Title style={{marginLeft:'5%'}}>
          About Me
        </Modal.Title>
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
  );
}

export default AboutMe; 