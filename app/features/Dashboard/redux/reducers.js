
import createReducer from '../../../helper/createReducer';
import * as types from './types';

const initialState = {
    productlist: {},

};

export const dashboardReducer = createReducer(initialState, {
    [types.SAVE_PRODUCT_LIST](state, action) {
        return {
            ...state,
            productlist: action.payload
        };
    },
});

