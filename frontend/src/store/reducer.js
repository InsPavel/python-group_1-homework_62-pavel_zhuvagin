import {LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_ERROR} from "./actions/login";
import {LOGOUT} from "./actions/logout";
import {TOKEN_LOGIN_REQUEST, TOKEN_LOGIN_SUCCESS, TOKEN_LOGIN_ERROR} from "./actions/token-login";
import {MOVIES_REQUEST, MOVIES_SUCCESS, MOVIES_ERROR} from "./actions/movieList";


const initialState = {
    login: {
        loading: false,
        errors: {}
    },
    auth: {},
    app: {
        loading: true,
        errors: {}
    },
    register: {

    },
    movieList: {
        movie: [],
        loading: false,
        errors: {}
    },
    movieDetail: {

    },
    movieAdd: {

    },
    movieEdit: {

    }
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_REQUEST:
            return {
                ...state,
                login: {
                    ...state.login,
                    errors: {},
                    loading: true
                }
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                login: {
                    ...state.login,
                    loading: false,
                },
                auth: action.data
            };
        case LOGIN_ERROR:
            return {
                ...state,
                login: {
                    ...state.login,
                    loading: false,
                    errors: action.errors
                },
            };
        case LOGOUT:
            return {
                ...state,
                auth: {}
            };
        case TOKEN_LOGIN_REQUEST:
            return {
                ...state,
                app: {
                    ...state.app,
                    loading: true,
                    errors: {}
                }
            };
        case TOKEN_LOGIN_SUCCESS:
            return {
                ...state,
                app: {
                    ...state.app,
                    loading: false,
                },
                auth: action.data
            };
        case TOKEN_LOGIN_ERROR:
            return {
                ...state,
                app: {
                    ...state.app,
                    loading: true,
                    errors: action.errors
                }
            };
        case MOVIES_REQUEST:
            return {
                ...state,
                movieList: {
                    ...state.movieList,
                    loading: true,
                    errors: {}
                },
            };
        case MOVIES_SUCCESS:
            return {
                ...state,
                movieList: {
                    ...state.movieList,
                    movie: action.data,
                    loading: false,
                },
            };
        case MOVIES_ERROR:
            return {
                ...state,
                movieList: {
                    ...state.movieList,
                    loading: false,
                    errors: action.errors
                }
            };
        default:
            return state
    }
};

export default reducer;