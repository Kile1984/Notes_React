import React, { useContext } from 'react';
import {
    Row, Col,
    Card, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';

import NoteContext from '../../context/note/notesContext';

import styles from './Notes.module.scss';

const Notes = () => {

    const notesContext = useContext(NoteContext);

    const deleteBtn = e => {
        notesContext.deleteNote(e.target.id);
    }

    return (
        <Row>
            {
                notesContext.notes.map((n, i) => {
                    return (
                        <Col lg="3" md="6" className="mb-4" key={n.title}>
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
                    );
                })
            }
        </Row>
    );
};

export default Notes;