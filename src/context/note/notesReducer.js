import {
    ADD_NOTE,
    DELETE_NOTE,
    DRAFT_NOTE,
    PUBLISH_DRAFT
} from '../types';

export default (state, action) => {

    switch(action.type) {

        case ADD_NOTE:
            return {
                ...state
            };
        case DELETE_NOTE:
            return {
                ...state
            };
        case DRAFT_NOTE:
                return {
                    ...state
            };    
        case PUBLISH_DRAFT:
                return {
                    ...state
            };    
        default: 
            return state;
    }
}