import {
    FETCH_DATA_START,
    FETCH_DATA_RECEIVE,
    ADD_POST_TO_STORE,
    FETCH_DATA_END,
    SET_ID_EDITED_MESSAGE
} from "../constants/action_types";

const initialState = {
    messages: [],
    selectedMessage: 0,
    loading: false
};

export const forum_reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_DATA_START:
            return { ...state, loading: true };
        case FETCH_DATA_RECEIVE:
            return { ...state, messages: action.data, loading: false };
        case FETCH_DATA_END:
            return { ...state, loading: false };
        case ADD_POST_TO_STORE:
            return {
                ...state,
                messages: [...state.messages, action.data]
            };
        case SET_ID_EDITED_MESSAGE:
            let id = 0;
            if (!state.selectedMessage) {
                id = action.id;
            }
            return {
                ...state,
                selectedMessage: id
            };
        default:
            return state;
    }
};
