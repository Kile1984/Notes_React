import React, { useContext } from "react";
import NotesState from '../../context/note/notesContext';
import {
    Container, Row, Col,
    Card, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';

import styles from '../Notes/Notes.module.scss';

const SortedNotes = props => {
    const notesContext = useContext(NotesState);
    
    // Sorting notes by date
    let newNotesArray = notesContext.notes.sort((a, b) => {
        var c = new Date(a.todayDate);
        var d = new Date(b.todayDate);
        return d - c;
    })

    // Delete notes
    const deleteBtn = e => {
        notesContext.deleteNote(e.target.id);
    }

    return (
        <Container>
                <Row>
            {
                newNotesArray.map((n, i) => {
                    return (
                        <Col lg="3" md="6" className="mb-3" key={n.title}>
                            <Card className={`rounded-0 ${styles.card}`}>
                                <CardBody>
                                    <CardTitle 
                                        className={styles.cardTitle}>
                                        {n.title.toUpperCase()}
                                    </CardTitle>

                                    <CardTitle 
                                        className={styles.cardDate}>
                                        {new Date(n.todayDate).toLocaleDateString()}
                                    </CardTitle>

                                    <CardText 
                                    className={styles.cardBody}>
                                        {n.body}
                                    </CardText>

                                    <CardSubtitle 
                                        className={styles.author}>
                                        {n.author.toUpperCase()}
                                    </CardSubtitle>

                                    <Button color="danger" 
                                        className={`rounded-0 mt-3 py-0 ${styles.deleteBtn}`}
                                        onClick={deleteBtn}
                                        id={i}
                                        >Delete note
                                    </Button>
                                </CardBody>
                            </Card>
                        </Col>
                    )
                })
            }
            </Row>
        </Container>
            
    )
}

export default SortedNotes;