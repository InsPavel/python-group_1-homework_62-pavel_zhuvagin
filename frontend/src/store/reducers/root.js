// import {MOVIES_REQUEST, MOVIES_SUCCESS, MOVIES_ERROR} from "../actions/movie-list";
import {MOVIE_ADD_REQUEST, MOVIE_ADD_SUCCESS, MOVIE_ADD_ERROR} from "../actions/movieAdd";
import {MOVIE_EDIT_REQUEST, MOVIE_EDIT_SUCCESS, MOVIE_EDIT_ERROR} from "../actions/movieEdit";
import {MOVIE_DETAIL_REQUEST, MOVIE_DETAIL_SUCCESS, MOVIE_DETAIL_ERROR} from "../actions/movieDetail";
import {HALL_SUCCESS, HALL_REQUEST, HALL_ERROR} from "../actions/hallList";
import {HALL_DETAIL_REQUEST, HALL_DETAIL_SUCCESS, HALL_DETAIL_ERROR} from "../actions/hallDetail";

import {combineReducers} from 'redux';
import loginReducer from "./login";
import authReducer from "./auth";
import tokenLoginReducer from "./app";
import movieListReducer from "./movie-list";

const rootReducer = combineReducers({
    login: loginReducer,
    auth: authReducer,
    app: tokenLoginReducer,
    movieList: movieListReducer,
});

export default rootReducer;
//     movieList: {
//         movie: [],
//         loading: false,
//         errors: {}
//     },
//     movieDetail: {
//         movie: null,
//         errors: {}
//     },
//     movieAdd: {
//         errors: {}
//     },
//     movieEdit: {
//         movie: null,
//         errors: {}
//     },
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
//         case MOVIES_REQUEST:
//             return {
//                 ...state,
//                 movieList: {
//                     ...state.movieList,
//                     loading: true,
//                     errors: {}
//                 },
//             };
//         case MOVIES_SUCCESS:
//             return {
//                 ...state,
//                 movieList: {
//                     ...state.movieList,
//                     movie: action.data,
//                     loading: false,
//                 },
//             };
//         case MOVIES_ERROR:
//             return {
//                 ...state,
//                 movieList: {
//                     ...state.movieList,
//                     loading: false,
//                     errors: action.errors
//                 }
//             };
//         case MOVIE_ADD_REQUEST:
//             return {
//                 ...state,
//                 movieAdd: {
//                     ...state.movieAdd,
//                     errors: {}
//                 },
//             };
//         case MOVIE_ADD_SUCCESS:
//             return {
//                 ...state,
//                 movieAdd: {
//                     ...state.movieAdd,
//                 },
//             };
//         case MOVIE_ADD_ERROR:
//             return {
//                 ...state,
//                 movieAdd: {
//                     ...state.movieAdd,
//                     errors: action.errors
//                 }
//             };
//         case MOVIE_EDIT_REQUEST:
//             return {
//                 ...state,
//                 movieEdit: {
//                     ...state.movieEdit,
//                     errors: {}
//                 },
//             };
//         case MOVIE_EDIT_SUCCESS:
//             return {
//                 ...state,
//                 movieEdit: {
//                     ...state.movieEdit,
//                     movie: action.data,
//                 },
//             };
//         case MOVIE_EDIT_ERROR:
//             return {
//                 ...state,
//                 movieEdit: {
//                     ...state.movieEdit,
//                     errors: action.errors
//                 }
//             };
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

