import axios from 'axios';
import {HALLS_URL} from "../../api-urls";

export const HALL_REQUEST = "HALL_REQUEST";
export const HALL_SUCCESS = "HALL_SUCCESS";
export const HALL_ERROR = "HALL_ERROR";

export const hallRequest = () => {
    return {type: HALL_REQUEST}
};

export const hallSuccess = (data) => {
    return {type: HALL_SUCCESS, data}
};

export const hallError = (errors) => {
    return {type: HALL_ERROR, errors}
};

export const hallList = () => {
    return dispatch => {
        dispatch(hallRequest());
        return axios.get(HALLS_URL).then(response => {
            console.log(response);
            return dispatch(hallSuccess(response.data));
        }).catch(error => {
            console.log(error);
            console.log(error.response);
            return dispatch(hallError(error.response.data));
        });
    }
};




