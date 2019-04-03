import axios from 'axios';
import {MOVIES_URL} from "../../api-urls";

export const MOVIES_LIST_REQUEST_SUCCESS = "MOVIES_LIST_REQUEST_SUCCESS";

export const loadMovies = () => {
    return dispatch => {
        axios.get(MOVIES_URL)
            .then(response => {
            console.log(response);
            return dispatch({
                type: MOVIES_LIST_REQUEST_SUCCESS, movies: response.data
            });
        }).catch(error => {
            console.log(error);
        });
    }
};




