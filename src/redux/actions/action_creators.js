import * as Type from "../constants/action_types";

// *** SYNCRONOUS ACTIONS ***

export const fetchDataStart = () => {
    return {
        type: Type.FETCH_DATA_START
    };
};

// *** ASYNCRONOUS ACTIONS ***

export const requestData = () => {
    return dispatch => {
        dispatch(fetchDataStart());

        const url = "https://jsonplaceholder.typicode.com/posts";
        return fetch(url).then(response => {
            console.log(response).catch(err => {
                console.log(err);
            });
        });
    };
};
