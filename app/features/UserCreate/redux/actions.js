import * as types from './types';

export function alertHubRequest(payload) {
    return {
        type: types.USER_LOGIN,
        payload: payload
    };
}

