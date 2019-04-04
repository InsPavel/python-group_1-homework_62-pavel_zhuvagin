import axios from 'axios';
import {HALLS_URL} from "../../api-urls";


export const HALL_ADD_REQUEST = "HALL_ADD_REQUEST";
export const HALL_ADD_SUCCESS = "HALL_ADD_SUCCESS";
export const HALL_ADD_ERROR = "HALL_ADD_ERROR";

export const hallAddAction = (hall, authToken) => {
    const options = {
        headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Token ' + authToken
            }
    };
    return dispatch => {
        dispatch({type: HALL_ADD_REQUEST});
        return axios.post(HALLS_URL, hall, options)
        .then(response => {
            console.log(hall);
            return dispatch({type: HALL_ADD_SUCCESS, hall: response.data})
        })
        .catch(error => {
            console.log(error);
            console.log(error.response);
            return dispatch({type: HALL_ADD_ERROR, errors: error.response.data})
        });
    };
};




