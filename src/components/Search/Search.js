import React from 'react';
import { withRouter } from 'react-router-dom';
import { Container, Form, FormGroup, Label, Input } from 'reactstrap';

const Search = props => {

    const search = e => {
        return e.target.value === "" ?
            props.history.push("/") :
            props.history.push("/search-notes/" + e.target.value);
    }

    return (
        <Container>
            <Form>
                <FormGroup>
                    <Label for="exampleEmail">Search notes:</Label>
                    <Input type="text" name="text" id="text" placeholder="Start typing..."
                        onChange={search} />
                </FormGroup>
            </Form>
        </Container>
    );
}

export default withRouter(Search);