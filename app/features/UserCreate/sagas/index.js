import { takeLatest } from 'redux-saga/effects';
import * as types from '../redux/types';
import { login } from './UserSaga';

export const userCreateSaga = [
    takeLatest(types.USER_LOGIN, login),


];
