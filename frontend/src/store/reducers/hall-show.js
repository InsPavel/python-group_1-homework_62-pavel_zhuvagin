import {HALL_SHOW_REQUEST_SUCCESS} from "../actions/hall-show";

const initialState = {
    shows: [],
};

const hallShowReducer = (state = initialState, action) => {
    switch (action.type) {
        case HALL_SHOW_REQUEST_SUCCESS:
            return {...state, shows: action.shows};
        default:
            return state
    }
};


export default hallShowReducer;