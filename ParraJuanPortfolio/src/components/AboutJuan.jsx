import React, { useState } from 'react';
import { Button, Container, Modal, Row } from 'react-bootstrap';

function AboutMe() {
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  return (
    <Container style={{ height: '100%' }}>
      <Button onClick={handleShow} style={{ height: '100%', backgroundColor: "rgb(	206, 220, 0)", color: 'black', border: '2px,solid,black', margin: '0' }}>
        About Me
      </Button>

      <Modal show={showModal} onHide={handleClose} style={{}} >
        <Container style={{ backgroundColor: 'black' }}>
          <Modal.Header closeButton style={{ backgroundColor: 'black', color: 'rgb(	206, 220, 0)', }}>
            <Modal.Title>Contact Information</Modal.Title>
          </Modal.Header>
          <Row style={{ margin: '2%', backgroundColor: 'rgb(3, 122, 104)', color: 'white' }}>
            <Row>
           <p><u style={{color:'black'}}><strong>Phone Number</strong></u> : < h7> (407) 781-7287</h7></p> 
            </Row>
            <p><u style={{color:'black'}}><strong>Email</strong></u> : < h7> Parrajuan1025@gmail.com</h7></p> 
          </Row>
          <Modal.Title style={{ marginLeft: '5%', color: 'rgb(	206, 220, 0)' }}>
            About Me
          </Modal.Title>
          <Modal.Body style={{ backgroundColor: 'rgb(3, 122, 104)', color: 'white', margin: '2%' }}>
            I'm a dedicated Full Stack MERN Developer with a passion for crafting elegant and efficient web applications. I have a strong foundation in MongoDB, Express.js, React.js, and Node.js, and I'm always eager to learn new technologies.

            I'm excited to collaborate with talented teams and contribute to innovative projects. Let's build something great together!
          </Modal.Body>
          <Modal.Footer style={{ backgroundColor: 'black', padding: '2%' }}>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Container>
      </Modal>
    </Container>
  );
}

export default AboutMe; 