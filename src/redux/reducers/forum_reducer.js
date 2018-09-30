import {
    FETCH_DATA_START,
    FETCH_DATA_RECEIVE,
    ADD_POST_TO_STORE,
    FETCH_DATA_END
} from "../constants/action_types";

const initialState = {
    messages: [],
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
        default:
            return state;
    }
};
