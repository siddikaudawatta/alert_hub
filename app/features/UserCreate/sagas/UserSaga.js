import {
    fcmToken
} from '../redux/selectors';


import { delay, put, select } from 'redux-saga/effects';
import api from '../../../services/index';
import * as globalTypes from '../../../store/appStore/types';

export function* login(payload) {

    yield put({
        type: globalTypes.SHOW_LOADING
    });
    //yield delay(2000); // simulate API
    yield put({
        type: globalTypes.HIDE_LOADING
    });
    let token = yield select(fcmToken);

    let request = {
        mobileNumber: "767312929",
        fcmToken: token,
    }

    let rep = yield api(

        'POST',
        'https://alert-hub.onrender.com/api/profile/otp/send',
        request,

    );
    console.log('alertHubAPI->', rep);



}

