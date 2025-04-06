
import createReducer from '../../../helper/createReducer';
import * as types from './types';

const initialState = {
    data: '',
    userRegiserData: ''
};

export const userCreate = createReducer(initialState, {
    [types.USER_REGISTER_DATA](state, action) {
        return {
            ...state,
            userRegiserData: action.payload
        };
    },
});

