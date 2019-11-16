import React, { useContext } from 'react';
import { Button, Container } from 'reactstrap';

import NotesState from '../../context/note/notesContext';

const Draft = () => {
    const notesContext = useContext(NotesState);

    const publishDraft = e => {

        notesContext.publishDraftNote(notesContext.draft[e.target.id]);
        notesContext.draft.splice(e.target.id, 1);
    }

    return (
        <Container>
            {
                notesContext.draft.map((d, i) => {
                    return (
                        <Button color="success" className="mb-3 mr-1 rounded-0"
                            id={i}
                            key={d.title}
                            onClick={publishDraft}>
                            Publish: {d.title.toUpperCase()}
                        </Button>
                    );
                })
            }
        </Container>
    )
}

export default Draft;