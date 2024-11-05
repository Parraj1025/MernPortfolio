import React, { useState } from "react";
import {Button ,Container, Modal} from 'react-bootstrap'

function ContactMe() {
    const [showModal, setShowModal] = useState()
    
    const handleClose = () => setShowModal(false);
    const handleOpen = () => setShowModal(true);

    return (
        <Container>
            <Button onClick={handleOpen}>
                Contact Me
            </Button>

            <Modal show={showModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Contact Me</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>
                        Phone Number: (407) 781-7287
                    </p>
                    <p>
                        Email: Parrajuan1025@gmail.com
                    </p>
                </Modal.Body>
            </Modal>
        </Container>
    )
}

export default ContactMe