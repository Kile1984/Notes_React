import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Container, Row } from 'reactstrap';

import Header from '../Header/Header';
import Search from '../Search/Search';
import NewNote from '../NewNote/NewNote';
import Notes from '../Notes/Notes';
import Sort from '../Sort/Sort';
import SearchNotes from '../ShowSearchNotes/ShowSearchNotes';
import SortedNotes from '../SortedNotes/SortedNotes';
import Draft from '../Draft/Draft';

function App() {

  return (
    <Router>

      <Header />
      <Search />
      <Route exact path="/" component={Draft} />
      <Switch>

        <Route exact path="/" render={() =>
          <Container>
            <Row>
              <NewNote />
              <Sort />
            </Row>
            <Notes />
          </Container>
        } />

        <Route exact path="/search-notes/:title" component={SearchNotes} />

        <Route exact path="/sorting-notes" render={() =>
          <SortedNotes />
        } />

      </Switch>

    </Router>
  );
}

export default App;
