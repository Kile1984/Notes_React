import React, { useReducer } from 'react';
import NotesContext from './notesContext';
import NotesReducer from './notesReducer';
import {
    ADD_NOTE,
    DELETE_NOTE,
    DRAFT_NOTE,
    PUBLISH_DRAFT
} from '../types';

import data from '../../data/notes.json';

const NotesState = props => {
   
    const initialState = {
        notes: data,
        draft: []
    }

    const [state, dispatch] = useReducer(NotesReducer, initialState); 

     // Add note
     const addNote = newNotesObj => {

        dispatch({
            type: ADD_NOTE,
            act: state.notes.push(newNotesObj)
        })
     }

     // Delete note
    const deleteNote = id => {
    
        dispatch({
            type: DELETE_NOTE,
            act: state.notes.splice(id,1)
        })
      }

    // Save note to draft
    const saveToDraft = draftObj => {
        
        dispatch({ 
            type: DRAFT_NOTE,
            act: state.draft.push(draftObj)
        }) 
    }

    // Publish draft
    const publishDraftNote = publishNote => {
       
        dispatch({ 
            type: PUBLISH_DRAFT,
            act: state.notes.push(publishNote)
        }) 
    }
    return (
    <NotesContext.Provider
        value={{
            notes: state.notes,
            draft: state.draft,
            deleteNote,
            addNote, 
            saveToDraft,
            publishDraftNote
        }}>
        
        {props.children}
    </NotesContext.Provider>
    );
};

export default NotesState;

