import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import App from './components/App/App';
import NoteState from './context/note/NotesState';

ReactDOM.render(
	<NoteState>
		<App />
	</NoteState>, document.getElementById('root'));

