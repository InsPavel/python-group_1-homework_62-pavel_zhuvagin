import axios from 'axios';
import {MOVIES_URL} from "../../api-urls";


export const MOVIE_ADD_REQUEST = "MOVIE_ADD_REQUEST";
export const MOVIE_ADD_SUCCESS = "MOVIE_ADD_SUCCESS";
export const MOVIE_ADD_ERROR = "MOVIE_ADD_ERROR";

export const movieAddRequest = () => {
    return {type: MOVIE_ADD_REQUEST}
};

export const movieAddSuccess = (data) => {
    return {type: MOVIE_ADD_SUCCESS, data}
};

export const movieAddError = (errors) => {
    return {type: MOVIE_ADD_ERROR, errors}
};

export const movieAddAction = (formData, headers) => {
    return dispatch => {
        dispatch(movieAddRequest());
        return axios.post(MOVIES_URL, formData, {headers: headers})
        .then(response => {
            console.log(response);
            return dispatch(movieAddSuccess(response.data));
        }).catch(error => {
            console.log(error);
            console.log(error.response);
            return dispatch(movieAddError(error.response.data));
        });
    }
};




