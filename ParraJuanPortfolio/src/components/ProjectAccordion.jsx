import { Accordion, Container} from "react-bootstrap";
import NoteCarousel from "./NoteCarousel";
import SocialCarousel from "./SocialCarousel";

function ProjectAccordion() {
    return(
        <Container style={{marginBottom:'5%'}}>
    <Accordion style={{width:'100%'}}>
        <Accordion.Item eventKey="0">
            <Accordion.Header><>Social Network</> 
            <a href="https://juanssocial-1.onrender.com/" target="_blank" style={{marginLeft:'2%'}}>Visit</a> 
            </Accordion.Header>
            <Accordion.Body>
                <SocialCarousel/>
            </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
            <Accordion.Header> MongoDb </Accordion.Header>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
            <Accordion.Header> Note Taker </Accordion.Header>
            <Accordion.Body>
            <NoteCarousel/>
            </Accordion.Body>
        </Accordion.Item>
    </Accordion>
    </Container>
    )
}

export default ProjectAccordion