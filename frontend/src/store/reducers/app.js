import {TOKEN_LOGIN_ERROR, TOKEN_LOGIN_REQUEST, TOKEN_LOGIN_SUCCESS} from "../actions/token-login";

const initialState = {
    login: {
        loading: false,
        errors: {}
    },
};

const tokenLoginReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOKEN_LOGIN_REQUEST:
            return {
                ...state,
                app: {
                    ...state,
                    loading: true,
                    errors: {}
                }
            };
        case TOKEN_LOGIN_SUCCESS:
            return {
                ...state,
                app: {
                    ...state,
                    loading: false,
                },
            };
        case TOKEN_LOGIN_ERROR:
            return {
                ...state,
                app: {
                    ...state,
                    loading: true,
                    errors: action.errors
                }
            };
        default:
            return state
    }
};

export default tokenLoginReducer;
