import axios from 'axios';
import {HALLS_URL} from "../../api-urls";

export const HALLS_LIST_REQUEST_SUCCESS = 'HALLS_LIST_REQUEST_SUCCESS';

export const loadHalls = () => {
    return dispatch => {
        return axios.get(HALLS_URL)
            .then(response => {
            console.log(response);
            return dispatch({type: HALLS_LIST_REQUEST_SUCCESS, halls: response.data});
        }).catch(error => {
            console.log(error);
        });
    }
};




