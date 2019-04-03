import {LOGIN_ERROR, LOGIN_REQUEST, LOGIN_SUCCESS} from "../actions/login";
import {TOKEN_LOGIN_ERROR, TOKEN_LOGIN_REQUEST, TOKEN_LOGIN_SUCCESS} from "../actions/token-login";
import {LOGOUT} from "../actions/logout";

const initialState = {
    login: {
        loading: false,
        errors: {}
    },
};

const loginReducer = (state = initialState, action) => {
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
        default:
            return state
    }
};

export default loginReducer;