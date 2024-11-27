import { Accordion, AccordionBody, Container } from "react-bootstrap";
import NoteCarousel from "./NoteCarousel";
import SocialCarousel from "./SocialCarousel";
import DBCarousel from "./DBCarousel";

function ProjectAccordion() {
    return (
        <Container fluid style={{ width:'100vw', minHeight:'320px', marginBottom:'15%'}}>
            <Accordion style={{ width: '95%', marginInlineStart:'2.5%', marginInlineEnd:'2.5%', height:'fit-content'}}>
                <Accordion.Item eventKey="0">
                    <Accordion.Header><>Social Network</>
                        <a href="https://juanssocial-1.onrender.com/" target="_blank" style={{ marginLeft: '2%' }}>Visit</a>
                    </Accordion.Header>
                    <Accordion.Body>
                        <SocialCarousel />
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header> MongoDb </Accordion.Header>
                    <AccordionBody>
                        <DBCarousel />
                    </AccordionBody>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header> And More </Accordion.Header>
                    <Accordion.Body>
                        <NoteCarousel />
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            
        </Container>
    )
}

export default ProjectAccordion