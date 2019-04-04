import {HALL_LOAD_SUCCESS} from "../actions/hall-detail";

const initialState = {
    hall: {},
};

const hallDetailReducer = (state = initialState, action) => {
    switch (action.type) {
        case HALL_LOAD_SUCCESS:
            return {...state, hall: action.hall};
        default:
            return state
    }
};


export default hallDetailReducer;