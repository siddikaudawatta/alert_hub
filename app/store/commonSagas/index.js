import { takeEvery } from 'redux-saga/effects';
import * as types from './redux/types';
import { underMaintenance, handleErrors, invalidGrant} from './commonErrorSaga';

export const commonErrorSaga =[
    takeEvery(types.GLOBAL_ERROR_METHOD, handleErrors),
    takeEvery(types.UNDER_MAINTENANCE, underMaintenance),
    takeEvery(types.INVALID_GRANT, invalidGrant),
];
