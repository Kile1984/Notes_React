import React, { useContext } from 'react';
import {
    Container, Row, Col,
    Card, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';

import NotesState from '../../context/note/notesContext';

import styles from '../Notes/Notes.module.scss';


const ShowSearchNotes = props => {
    const notesContext = useContext(NotesState);


    const deleteBtn = e => {
        notesContext.deleteNote(e.target.id);
    }

    return (
        <div>
            <Container>
                <Row>
                    {
                        notesContext.notes.map((el, i) => {                           

                            return el.title.toLowerCase()
                                .indexOf(props.match.params.title.toLowerCase()) !== -1 &&
                                
                                <Col lg="3" md="6" className="mb-3" key={el.title}>
                                    {console.log(el.title)}
                                    <Card className={`rounded-0 ${styles.card}`}>
                                        <CardBody>
                                            <CardTitle 
                                                className={styles.cardTitle}>
                                                {el.title.toUpperCase()}
                                            </CardTitle>

                                            <CardTitle 
                                                className={styles.cardDate}>
                                                {new Date(el.todayDate).toLocaleDateString()}
                                            </CardTitle>

                                            <CardText 
                                                className={styles.cardBody}>
                                                {el.body}
                                            </CardText>

                                            <CardSubtitle 
                                                className={styles.author}>
                                                {el.author.toUpperCase()}
                                            </CardSubtitle>

                                            <Button color="danger" 
                                                className={`rounded-0 mt-3 py-0
                                                ${styles.deleteBtn}`}
                                                onClick={deleteBtn}
                                                id={i}
                                                >Delete note
                                            </Button>
                                        </CardBody>
                                    </Card>
                                </Col>
                        })
                    }
                </Row>
            </Container>
        </div>

    );
}

export default ShowSearchNotes;