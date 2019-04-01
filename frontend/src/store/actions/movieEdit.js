import axios from 'axios';
import {MOVIES_URL} from "../../api-urls";


export const MOVIE_EDIT_REQUEST = "MOVIE_EDIT_REQUEST";
export const MOVIE_EDIT_SUCCESS = "MOVIE_EDIT_SUCCESS";
export const MOVIE_EDIT_ERROR = "MOVIE_EDIT_ERROR";

export const movieEditRequest = () => {
    return {type: MOVIE_EDIT_REQUEST}
};

export const movieEditSuccess = (data) => {
    return {type: MOVIE_EDIT_SUCCESS, data}
};

export const movieEditError = (errors) => {
    return {type: MOVIE_EDIT_ERROR, errors}
};


export const getMovie = (id) => {
    return dispatch => {
        dispatch(movieEditRequest());
        return axios.get(MOVIES_URL + id)
        .then(response => {
            console.log(response);
            return dispatch(movieEditSuccess(response.data));
        }).catch(error => {
            console.log(error);
            console.log(error.response);
            return dispatch(movieEditError(error.response.data));
        });
    }
};

export const movieEditAction = (formData, headers, id) => {
    return dispatch => {
        dispatch(movieEditRequest());
        return axios.put(MOVIES_URL + id + '/', formData, {headers: headers})
        .then(response => {
            console.log(response);
            return dispatch(movieEditSuccess(response.data));
        }).catch(error => {
            console.log(error);
            console.log(error.response);
            return dispatch(movieEditError(error.response.data));
        });
    }
};





