import * as types from './types';



export function enableGlobalModal(payload) {
    return {
        type: types.OPEN_GLOBAL_MODAL,
        payload
    };
}

export function storeFCMToken(payload) {
    return {
        type: types.STORE_FCM_TOKEN,
        payload
    };
}


