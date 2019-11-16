import React, { useState, useContext } from 'react';
import {
  Button, Modal, ModalHeader,
  ModalBody, ModalFooter, Input,
  FormGroup, Form, Col
} from 'reactstrap';

import NotesState from '../../context/note/notesContext';

const NewNote = props => {
  const notesContext = useContext(NotesState);

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [body, setBody] = useState("");

  // Get today date in miliseconds
  const getDate = new Date().getTime();

  // Modal
  const { className } = props;
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  // Geting input value 
  const getTitle = e => {
    setTitle(e.target.value);
  }
  const getAuthor = e => {
    setAuthor(e.target.value);
  }
  const getBody = e => {
    setBody(e.target.value);
  }

  // Submit modal form
  const onSubmit = e => {
    e.preventDefault();

    const newNotesObj = {
      title,
      author,
      body,
      todayDate: getDate
    }

    notesContext.addNote(newNotesObj);

    // Reset input fields
    setTitle("");
    setAuthor("");
    setBody("");
  }
  const saveDraft = () => {

    const draftObj = {
      title,
      author,
      body,
      todayDate: getDate
    }
    notesContext.saveToDraft(draftObj);

    toggle();
  }
  return (
    <Col md="6" className="mb-3">
      <Button color="primary" className="rounded-0 w-100" onClick={toggle}>New note</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <Form onSubmit={onSubmit}>
          <ModalHeader toggle={toggle}>Add note</ModalHeader>
          <ModalBody>
            <FormGroup>
              <Input type="text" name="text" id="text" placeholder="Add title" className="mb-1"
                onChange={getTitle} />

              <Input type="textarea" name="body" id="body" placeholder="Add body" className="mb-1"
                onChange={getBody} />

              <Input type="text" name="author" id="author" placeholder="Add author" className="mb-1"
                onChange={getAuthor} />
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" type="submit" className="rounded-0"
              onClick={toggle}>
              Add note
            </Button>
            <Button type="button" color="success" className="rounded-0"
              onClick={saveDraft}>
              Save to draft
            </Button>
          </ModalFooter>
        </Form>
      </Modal>
    </Col>
  );
}

export default NewNote;