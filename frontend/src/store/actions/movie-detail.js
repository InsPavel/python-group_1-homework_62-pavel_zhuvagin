import axios from 'axios';
import {MOVIES_URL} from "../../api-urls";

export const MOVIE_LOAD_SUCCESS = "MOVIE_LOAD_SUCCESS";

export const loadMovie = (id) => {
    return dispatch => {
        axios.get(MOVIES_URL + id)
        .then(response => {
            console.log(response.data);
            return dispatch({
                type: MOVIE_LOAD_SUCCESS,
                movie: response.data
            });
        })
        .catch(error => {
            console.log(error);
            console.log(error.response);
        });
    }
};

