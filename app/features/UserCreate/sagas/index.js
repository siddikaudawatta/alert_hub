import { takeLatest } from 'redux-saga/effects';
import * as types from '../redux/types';
import { otpValidate, userRegister, userLogin } from './UserSaga';

export const userCreateSaga = [
    takeLatest(types.USER_LOGIN, otpValidate),
    takeLatest(types.USER_REGISTER_REQUEST, userRegister),
    takeLatest(types.USER_LOGIN_REQUEST, userLogin),

];
