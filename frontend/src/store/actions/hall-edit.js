import axios from 'axios';
import {HALLS_URL} from "../../api-urls";


export const HALL_EDIT_REQUEST = "HALL_EDIT_REQUEST";
export const HALL_EDIT_SUCCESS = "HALL_EDIT_SUCCESS";
export const HALL_EDIT_ERROR = "HALL_EDIT_ERROR";

export const HALL_LOAD_SUCCESS = "HALL_LOAD_SUCCESS";

export const loadHall = (id) => {
    return dispatch => {
        axios.get(HALLS_URL + id)
        .then(response => {
        console.log(response.data);
        return dispatch({type: HALL_LOAD_SUCCESS, hall: response.data});
        })
        .catch(error => {
        console.log(error);
        console.log(error.response);
        });
    }
};

export const saveHall = (hall, authToken) => {
    return dispatch => {
        const url = HALLS_URL + hall.id + '/';
        const options = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Token ' + authToken
            }
        };

        dispatch({type: HALL_EDIT_REQUEST});
        return axios.put(url, hall, options)
            .then(response => {
            console.log(response);
            return dispatch({type: HALL_EDIT_SUCCESS, hall: response.data});
        }).catch(error => {
            console.log(error);
            console.log(error.response);
            return dispatch({type: HALL_EDIT_ERROR, errors: error.response.data});
        });
    }
};

