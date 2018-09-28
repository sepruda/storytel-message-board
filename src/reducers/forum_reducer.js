import {
    FETCH_DATA_START,
    FETCH_DATA_RECEIVE
} from "../redux/constants/action_types";

const initialState = {
    posts: [],
    loading: false
};

export const forum_reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_DATA_START:
            return { ...state, loading: true };
        case FETCH_DATA_RECEIVE:
            return { ...state, posts: action.data, loading: false };
        default:
            return state;
    }
};
