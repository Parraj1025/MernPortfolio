import { Accordion} from "react-bootstrap";
import NoteCarousel from "../assets/Carousel";

function ProjectAccordion() {
    return(
    <Accordion>
        <Accordion.Item eventKey="0">
            <Accordion.Header> Mongo Database </Accordion.Header>
            <Accordion.Body>
                
            </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
            <Accordion.Header> Social Network </Accordion.Header>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
            <Accordion.Header> Note Taker </Accordion.Header>
            <Accordion.Body>
            <NoteCarousel/>
            </Accordion.Body>
        </Accordion.Item>
    </Accordion>
    )
}

export default ProjectAccordion