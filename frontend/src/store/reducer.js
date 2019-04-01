import {LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_ERROR} from "./actions/login";
import {LOGOUT} from "./actions/logout";
import {TOKEN_LOGIN_REQUEST, TOKEN_LOGIN_SUCCESS, TOKEN_LOGIN_ERROR} from "./actions/token-login";
import {MOVIES_REQUEST, MOVIES_SUCCESS, MOVIES_ERROR} from "./actions/movieList";
import {MOVIE_ADD_REQUEST, MOVIE_ADD_SUCCESS, MOVIE_ADD_ERROR} from "./actions/movieAdd";
import {MOVIE_EDIT_REQUEST, MOVIE_EDIT_SUCCESS, MOVIE_EDIT_ERROR} from "./actions/movieEdit";


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
        errors: {}
    },
    movieEdit: {
        movie: null,
        errors: {}
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
        case MOVIE_ADD_REQUEST:
            return {
                ...state,
                movieAdd: {
                    ...state.movieAdd,
                    errors: {}
                },
            };
        case MOVIE_ADD_SUCCESS:
            return {
                ...state,
                movieAdd: {
                    ...state.movieAdd,
                },
            };
        case MOVIE_ADD_ERROR:
            return {
                ...state,
                movieAdd: {
                    ...state.movieAdd,
                    errors: action.errors
                }
            };
        case MOVIE_EDIT_REQUEST:
            return {
                ...state,
                movieEdit: {
                    ...state.movieEdit,
                    errors: {}
                },
            };
        case MOVIE_EDIT_SUCCESS:
            return {
                ...state,
                movieEdit: {
                    ...state.movieEdit,
                    movie: action.data,
                },
            };
        case MOVIE_EDIT_ERROR:
            return {
                ...state,
                movieEdit: {
                    ...state.movieEdit,
                    errors: action.errors
                }
            };
        default:
            return state
    }
};

export default reducer;