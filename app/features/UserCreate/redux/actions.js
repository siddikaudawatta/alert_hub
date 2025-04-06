import * as types from './types';

export function otpValidate(payload) {
    return {
        type: types.USER_LOGIN,
        payload: payload
    };
}

export function alertRegisterequest(payload) {
    return {
        type: types.USER_REGISTER_REQUEST,
        payload: payload
    };
}

export function login(payload) {
    return {
        type: types.USER_LOGIN_REQUEST,
        payload: payload
    };
}



