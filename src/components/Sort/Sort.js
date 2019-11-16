import React from 'react';
import { withRouter } from 'react-router-dom';
import { Button, Col } from 'reactstrap';

const Sort = props => {

  const sortNotesByDate = () => {
    props.history.push('sorting-notes');
  }

  return (
    <Col md="6">
      <Button className="mb-4 rounded-0 w-100"
        onClick={sortNotesByDate}>
        Sort by date
      </Button>
    </Col>
  );
}

export default withRouter(Sort);