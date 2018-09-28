import {
    FETCH_DATA_START,
    FETCH_DATA_RECEIVE
} from "../redux/constants/action_types";

const initialState = {
    posts: [],
    post: {
        topic: "",
        message: "",
        author: 0,
        id: 0,
        date: ""
    }
};

export const forum_reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_DATA_START:
            return { ...state };
        case FETCH_DATA_RECEIVE:
            return { ...state, posts: action.data };
        default:
            return state;
    }
};
