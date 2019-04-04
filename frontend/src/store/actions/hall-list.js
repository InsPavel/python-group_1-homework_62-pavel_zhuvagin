import axios from 'axios';
import {HALLS_URL} from "../../api-urls";

export const HALSS_LIST_REQUEST_SUCCESS = "HALSS_LIST_REQUEST_SUCCESS";


// export const HALL_REQUEST = "HALL_REQUEST";
// export const HALL_SUCCESS = "HALL_SUCCESS";
// export const HALL_ERROR = "HALL_ERROR";

export const loadHalls = () => {
    return dispatch => {
        return axios.get(HALLS_URL)
            .then(response => {
            console.log(response);
            return dispatch({
                type: HALSS_LIST_REQUEST_SUCCESS,
                halls: response.data
            });
        }).catch(error => {
            console.log(error);
        });
    }
};




