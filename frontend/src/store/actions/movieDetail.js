import axios from 'axios';
import {MOVIES_URL} from "../../api-urls";


export const MOVIE_DETAIL_REQUEST = "MOVIE_DETAIL_REQUEST";
export const MOVIE_DETAIL_SUCCESS = "MOVIE_DETAIL_SUCCESS";
export const MOVIE_DETAIL_ERROR = "MOVIE_DETAIL_ERROR";

export const movieDetailRequest = () => {
    return {type: MOVIE_DETAIL_REQUEST}
};

export const movieDetailSuccess = (data) => {
    return {type: MOVIE_DETAIL_SUCCESS, data}
};

export const movieDetailError = (errors) => {
    return {type: MOVIE_DETAIL_ERROR, errors}
};


export const getMovieDetail = (id) => {
    return dispatch => {
        dispatch(movieDetailRequest());
        return axios.get(MOVIES_URL + id)
        .then(response => {
            console.log(response);
            return dispatch(movieDetailSuccess(response.data));
        }).catch(error => {
            console.log(error);
            console.log(error.response);
            return dispatch(movieDetailError(error.response.data));
        });
    }
};
