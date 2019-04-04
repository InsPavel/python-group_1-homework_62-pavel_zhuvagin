import axios from 'axios';
import {HALLS_URL} from "../../api-urls";

export const HALL_LOAD_SUCCESS = "HALL_LOAD_SUCCESS";

export const loadHall = (id) => {
    return dispatch => {
        axios.get(HALLS_URL + id)
        .then(response => {
            console.log(response.data);
            return dispatch({
                type: HALL_LOAD_SUCCESS,
                hall: response.data
            });
        })
        .catch(error => {
            console.log(error);
            console.log(error.response);
        });
    }
};

