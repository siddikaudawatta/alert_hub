import { takeLatest } from 'redux-saga/effects';
import * as types from '../redux/types';
import { otpValidate, userRegister } from './UserSaga';

export const userCreateSaga = [
    takeLatest(types.USER_LOGIN, otpValidate),
    takeLatest(types.USER_REGISTER_REQUEST, userRegister),


];
