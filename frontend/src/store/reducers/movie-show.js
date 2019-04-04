import {MOVIE_SHOW_REQUEST_SUCCESS} from "../actions/movie-show";

const initialState = {
    shows: [],
};

const movieShowReducer = (state = initialState, action) => {
    switch (action.type) {
        case MOVIE_SHOW_REQUEST_SUCCESS:
            return {...state, shows: action.shows};
        default:
            return state
    }
};


export default movieShowReducer;