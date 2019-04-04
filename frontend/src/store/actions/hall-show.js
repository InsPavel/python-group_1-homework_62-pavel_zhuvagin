import axios from 'axios';
import {SHOWS_URL} from "../../api-urls";

export const HALL_SHOW_REQUEST_SUCCESS = 'HALL_SHOW_REQUEST_SUCCESS';

export const loadShowHall = (id, current_date, next_date) => {
    return dispatch => {
        return axios.get(SHOWS_URL + '?hall_id=' + id + '&start_of_show=' + current_date + '&finish_of_show=' + next_date)
            .then(response => {
            console.log(response);
            return dispatch({type: HALL_SHOW_REQUEST_SUCCESS, shows: response.data});
        }).catch(error => {
            console.log(error);
        });
    }
};