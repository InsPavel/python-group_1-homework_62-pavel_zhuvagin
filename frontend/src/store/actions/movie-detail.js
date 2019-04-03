import axios from 'axios';
import {MOVIES_URL} from "../../api-urls";

export const MOVIE_LOAD_SUCCESS = "MOVIE_LOAD_SUCCESS";

export const loadMovie = (id) => {
    return dispatch => {
        axios.get(MOVIES_URL + id)
        .then(response => {
        console.log(response.data);
        return dispatch({type: MOVIE_LOAD_SUCCESS, movie: response.data});
        })
        .catch(error => {
        console.log(error);
        console.log(error.response);
        });
    }
};
// export const MOVIE_DETAIL_REQUEST = "MOVIE_DETAIL_REQUEST";
// export const MOVIE_DETAIL_SUCCESS = "MOVIE_DETAIL_SUCCESS";
// export const MOVIE_DETAIL_ERROR = "MOVIE_DETAIL_ERROR";
//
// export const movieDetail = (id) => {
//     return dispatch => {
//         dispatch(movieDetailRequest());
//         return axios.get(MOVIES_URL + id)
//         .then(response => {
//             console.log(response);
//             return dispatch(movieDetailSuccess(response.data));
//         }).catch(error => {
//             console.log(error);
//             console.log(error.response);
//             return dispatch(movieDetailError(error.response.data));
//         });
//     }
// };
