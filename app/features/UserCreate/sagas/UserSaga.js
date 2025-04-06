import {
    fcmToken,
    regData
} from '../redux/selectors';


import { delay, put, select } from 'redux-saga/effects';
import api from '../../../services/index';
import * as globalTypes from '../../../store/appStore/types';
import * as types from '../redux/types';

import NavigationService from '../../../navigations/NavigationService';

export function* otpValidate(payload) {

    yield put({
        type: globalTypes.SHOW_LOADING
    });
    //yield delay(2000); // simulate API
    yield put({
        type: globalTypes.HIDE_LOADING
    });
    let userRgData = yield select(regData);

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

export function* userRegister(action) {
    console.log('userRegister->', action);
    yield put({
        type: types.USER_REGISTER_DATA,
        payload: action.payload
    });

    yield put({
        type: globalTypes.SHOW_LOADING
    });
    let token = yield select(fcmToken);

    let request = {
        mobileNumber: action.payload.mobileNumber,
        fcmToken: token,
    }

    try {
        let rep = yield api(

            'POST',
            'https://alert-hub.onrender.com/api/profile/otp/send',
            request,

        );
        if (rep && rep.status === 200) {
            NavigationService.navigate('OTPContainer');
            yield put({
                type: globalTypes.HIDE_LOADING
            });
        }
        console.log('alertHubAPI->', rep);

    } catch (error) {
        console.log('API ERROR->', error);
    }




}

