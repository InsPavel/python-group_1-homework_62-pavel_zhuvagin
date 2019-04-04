import {HALL_SUCCESS, HALL_REQUEST, HALL_ERROR} from "../actions/hallList";
import {HALL_DETAIL_REQUEST, HALL_DETAIL_SUCCESS, HALL_DETAIL_ERROR} from "../actions/hallDetail";

import {combineReducers} from 'redux';
import loginReducer from "./login";
import authReducer from "./auth";
import tokenLoginReducer from "./app";
import movieListReducer from "./movie-list";
import movieEditReducer from "./movie-edit";
import movieDetailReducer from "./movie-detail";
import movieAddReducer from "./movie-add";
import registerReducer from "./register";

const rootReducer = combineReducers({
    login: loginReducer,
    register: registerReducer,
    auth: authReducer,
    app: tokenLoginReducer,
    movieList: movieListReducer,
    movieEdit: movieEditReducer,
    movieDetail: movieDetailReducer,
    movieAdd: movieAddReducer,
});

export default rootReducer;
//     hallList: {
//         hall: [],
//         loading: false,
//         error: {}
//     },
//     hallDetail: {
//         hall: [],
//         error: {}
//     }
// };
// const root = (state = initialState, action) => {
//     switch (action.type) {
//         case MOVIE_DETAIL_REQUEST:
//             return {
//                 ...state,
//                 movieDetail: {
//                     ...state.movieDetail,
//                     errors: {}
//                 },
//             };
//         case MOVIE_DETAIL_SUCCESS:
//             return {
//                 ...state,
//                 movieDetail: {
//                     ...state.movieDetail,
//                     movie: action.data,
//                 },
//             };
//         case MOVIE_DETAIL_ERROR:
//             return {
//                 ...state,
//                 movieDetail: {
//                     ...state.movieDetail,
//                     errors: action.errors
//                 }
//             };
//         case HALL_REQUEST:
//             return {
//                 ...state,
//                 hallList: {
//                     ...state.hallList,
//                     loading: true,
//                     errors: {}
//                 },
//             };
//         case HALL_SUCCESS:
//             return {
//                 ...state,
//                 hallList: {
//                     ...state.hallList,
//                     hall: action.data,
//                     loading: false,
//                 },
//             };
//         case HALL_ERROR:
//             return {
//                 ...state,
//                 hallList: {
//                     ...state.hallList,
//                     loading: false,
//                     errors: action.errors
//                 }
//             };
//         case HALL_DETAIL_REQUEST:
//             return {
//                 ...state,
//                 hallDetail: {
//                     ...state.hallDetail,
//                     errors: {}
//                 },
//             };
//         case HALL_DETAIL_SUCCESS:
//             return {
//                 ...state,
//                 hallDetail: {
//                     ...state.hallDetail,
//                     hall: action.data,
//                 },
//             };
//         case HALL_DETAIL_ERROR:
//             return {
//                 ...state,
//                 hallDetail: {
//                     ...state.hallDetail,
//                     errors: action.errors
//                 }
//             };
//         default:
//             return state
//     }
// };

