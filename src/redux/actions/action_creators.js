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

export const fetchDataEnd = () => {
    return {
        type: Type.FETCH_DATA_END
    };
};

export const addPostToStore = data => {
    return {
        type: Type.ADD_POST_TO_STORE,
        data
    };
};

export const setIdEditedMessage = id => {
    return {
        type: Type.SET_ID_EDITED_MESSAGE,
        id
    };
};

// *** ASYNCRONOUS ACTIONS ***
const baseUrl = "http://localhost:3000/messages/";
export const requestData = () => {
    return dispatch => {
        dispatch(fetchDataStart());

        return fetch(baseUrl, {
            method: "GET",
            headers: {
                "Content-type": "application-json"
            }
        })
            .then(response => {
                console.log("Response: " + response.status);
                return response.json();
            })
            .then(data => {
                console.log(data);
                dispatch(fetchDataReceive(data));
            })
            .catch(err => console.log(err));
    };
};

export const postDataHandler = data => {
    return dispatch => {
        dispatch(fetchDataStart());
        dispatch(addPostToStore(data));
        return fetch(baseUrl, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-type": "application/json"
            }
        })
            .then(response => response.json())
            .then(data => {
                console.log(JSON.stringify(data));
                dispatch(requestData());
                dispatch(fetchDataEnd());
            })
            .catch(error => console.log("Error", error));
    };
};

export const PutMessageHandler = (data, id) => {
    return dispatch => {
        dispatch(fetchDataStart());
        return fetch(baseUrl + id, {
            method: "PUT",
            body: JSON.stringify(data),
            headers: {
                "Content-type": "application/json"
            }
        })
            .then(response => response.json())
            .then(data => {
                console.log(JSON.stringify(data));
                dispatch(requestData());
                dispatch(fetchDataEnd());
            })
            .catch(error => console.log("Error", error));
    };
};
