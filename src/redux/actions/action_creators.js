import * as Type from "../constants/action_types";
import { generateDates } from "../actions/helper_functions/helper_functions";

// *** SYNCRONOUS ACTIONS ***

export const fetchDataStart = () => {
    return {
        type: Type.FETCH_DATA_START
    };
};

export const fetchDataReceive = data => {
    return {
        type: Type.FETCH_DATA_RECEIVE,
        data
    };
};

// *** ASYNCRONOUS ACTIONS ***

export const requestData = () => {
    return dispatch => {
        dispatch(fetchDataStart());

        const baseUrl = "https://jsonplaceholder.typicode.com";
        return fetch(baseUrl + "/posts")
            .then(response => {
                return response.json();
            })
            .then(data => {
                const posts = data.slice(0, 10);
                generateDates(posts);
                console.log(posts);
                dispatch(fetchDataReceive(posts));
            })
            .catch(err => {
                console.log(err);
            });
    };
};
