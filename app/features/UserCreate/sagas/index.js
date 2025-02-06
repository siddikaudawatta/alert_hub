import { takeLatest } from 'redux-saga/effects';
import * as types from '../redux/types';
import { alertHubAPI } from './UserSaga';

export const userCreateSaga = [
    takeLatest(types.ALERT_HUB_REQUEST, alertHubAPI),


];
