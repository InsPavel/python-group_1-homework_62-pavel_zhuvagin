import axios from 'axios';
import {SHOWS_URL} from "../../api-urls";

export const MOVIE_SHOW_REQUEST_SUCCESS = 'MOVIE_SHOW_REQUEST_SUCCESS';

export const loadShowMovie = (id, current_date, next_date) => {
    return dispatch => {
        return axios.get(SHOWS_URL + '?movie_id=' + id + '&start_of_show=' + current_date + '&finish_of_show=' + next_date)
            .then(response => {
            console.log(response);
            return dispatch({type: MOVIE_SHOW_REQUEST_SUCCESS, shows: response.data});
        }).catch(error => {
            console.log(error);
        });
    }
};