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
import hallListReducer from "./hall-list";

const rootReducer = combineReducers({
    login: loginReducer,
    register: registerReducer,
    auth: authReducer,
    app: tokenLoginReducer,
    movieList: movieListReducer,
    movieEdit: movieEditReducer,
    movieDetail: movieDetailReducer,
    movieAdd: movieAddReducer,
    hallList: hallListReducer
});

export default rootReducer;
//     hallDetail: {
//         hall: [],
//         error: {}
//     }
// };
// const root = (state = initialState, action) => {
//     switch (action.type) {
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

