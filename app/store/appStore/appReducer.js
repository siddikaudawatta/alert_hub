import createReducer from '../../helper/createReducer';
import * as types from './types';
const initialState = {
    selectedLanguage: 'en',
    token: '',
    access_token: '',
    fcmToken: '',
    isLoading: false,
};

export const appReducer = createReducer(initialState, {
    [types.USER_LOGIN_REQUEST_SUCCESS](state, action) {
        console.log('LOGIN REQUEST SUCCESS--> ', action.payload);
        return {
            ...state,
            access_token: action.payload.access_token
        };
    },
    [types.STORE_FCM_TOKEN](state, action) {
        console.log('STORE_FCM_TOKEN--> ', action.payload);
        return {
            ...state,
            fcmToken: action.payload
        };
    },
    [types.SHOW_LOADING](state, action) {

        return {
            ...state,
            isLoading: true
        };
    },
    [types.HIDE_LOADING](state, action) {

        return {
            ...state,
            isLoading: false
        };
    }

});
