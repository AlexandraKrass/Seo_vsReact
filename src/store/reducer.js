import config from '../config.json';
import * as actionTypes from './actionTypes'

const initialState = {
    userInfo: {
        firstName: 'No',
        lastName: 'Name'
    },
    configInfo: config
}

const reducer = (state = initialState, action) => {
    switch ( action.type ) {
        case actionTypes.SLIMLINE_WIDGET_INIT:
         return {
            ...state,
            userInfo: {
                ...state.userInfo
            }
        };
        default:
            return state;
    }
}

export default reducer;