import {useState} from "react"
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';


import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import ModalPopup from '../../components/modal';
import { CreateCourseForm } from "../../components/create-course-form";


function OrgHomePage() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <Row>
                <Col sm={3}>
                    <Nav variant="pills" className="flex-column">
                        <Nav.Item>
                            <Nav.Link eventKey="first"> Our Jobs </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="second"> Our Courses </Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Col>
                <Col sm={9}>
                    <Tab.Content>
                        <Tab.Pane eventKey="first">
                            ici on mettra le necessaire pour les offres

                            <Fab
                                color="primary"
                                aria-label="add"
                                onClick={handleOpen}
                                sx={{ position: "absolute", bottom: 12, right: 20 }} >
                                <AddIcon />
                            </Fab>

                            <ModalPopup handleClose={handleClose} open={open} content={<CreateCourseForm/>} />

                            
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                            Ici on mettra le necessaire pour les cours
                        </Tab.Pane>
                    </Tab.Content>
                </Col>
            </Row>
        </Tab.Container>
    );
}

export default OrgHomePage;