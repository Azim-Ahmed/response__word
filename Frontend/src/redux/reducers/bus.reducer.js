/* eslint-disable prettier/prettier */
import { busConstants } from '../actions/constants';

const initState = {
    buses: [],
    loading: false,
    error: '',
};
export default (state = initState, action) => {
    switch (action.type) {
        case busConstants.BUS_REQUEST:
            state = {
                ...state,
                loading: true,
            };
            break;
        case busConstants.BUS_SUCCESS:
            state = {
                ...state,
                buses: action.payload,
                loading: false,
            };
            break;
        case busConstants.BUS_FAILURE:
            state = {
                ...state,
                buses: [],
                loading: false,

            };
            break;
    }
    return state;
};
