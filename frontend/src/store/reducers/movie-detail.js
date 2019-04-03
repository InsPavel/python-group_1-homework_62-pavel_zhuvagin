import {MOVIE_LOAD_SUCCESS} from "../actions/movie-edit";

const initialState = {
    movie: null,
};

const movieDetailReducer = (state = initialState, action) => {
    switch (action.type) {
        case MOVIE_LOAD_SUCCESS:
            return {...state, movie: action.movie};
        default:
            return state
    }
};


export default movieDetailReducer;