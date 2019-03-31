import axios from 'axios';
import {MOVIES_URL} from "../../api-urls";

export const MOVIES_REQUEST = "MOVIES_REQUEST";
export const MOVIES_SUCCESS = "MOVIES_SUCCESS";
export const MOVIES_ERROR = "MOVIES_ERROR";

export const moviesRequest = () => {
    return {type: MOVIES_REQUEST}
};

export const moviesSuccess = (data) => {
    return {type: MOVIES_SUCCESS, data}
};

export const moviesError = (errors) => {
    return {type: MOVIES_ERROR, errors}
};

export const movieList = () => {
    return dispatch => {
        dispatch(moviesRequest());
        return axios.get(MOVIES_URL).then(response => {
            console.log(response);
            return dispatch(moviesSuccess(response.data));
        }).catch(error => {
            console.log(error);
            console.log(error.response);
            return dispatch(moviesError(error.response.data));
        });
    }
};




