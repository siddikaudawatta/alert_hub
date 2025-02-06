import * as types from './types';



export function enableGlobalModal(payload) {
    return {
        type: types.OPEN_GLOBAL_MODAL,
        payload
    };
}


