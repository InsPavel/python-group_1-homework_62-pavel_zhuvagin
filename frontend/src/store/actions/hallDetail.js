import axios from 'axios';
import {HALLS_URL} from "../../api-urls";


export const HALL_DETAIL_REQUEST = "HALL_DETAIL_REQUEST";
export const HALL_DETAIL_SUCCESS = "HALL_DETAIL_SUCCESS";
export const HALL_DETAIL_ERROR = "HALL_DETAIL_ERROR";

export const hallDetailRequest = () => {
    return {type: HALL_DETAIL_REQUEST}
};

export const hallDetailSuccess = (data) => {
    return {type: HALL_DETAIL_SUCCESS, data}
};

export const hallDetailError = (errors) => {
    return {type: HALL_DETAIL_ERROR, errors}
};


export const getHallDetail = (id) => {
    return dispatch => {
        dispatch(hallDetailRequest());
        return axios.get(HALLS_URL + id)
        .then(response => {
            console.log(response);
            return dispatch(hallDetailSuccess(response.data));
        }).catch(error => {
            console.log(error);
            console.log(error.response);
            return dispatch(hallDetailError(error.response.data));
        });
    }
};

