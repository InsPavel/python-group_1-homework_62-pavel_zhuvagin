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
import hallDetailReducer from "./hall-detail";
import hallAddReducer from "./hall-add";
import hallEditReducer from "./hall-edit";

const rootReducer = combineReducers({
    login: loginReducer,
    register: registerReducer,
    auth: authReducer,
    app: tokenLoginReducer,
    movieList: movieListReducer,
    movieEdit: movieEditReducer,
    movieDetail: movieDetailReducer,
    movieAdd: movieAddReducer,
    hallList: hallListReducer,
    hallDetail: hallDetailReducer,
    hallAdd: hallAddReducer,
    hallEdit: hallEditReducer
});

export default rootReducer;

