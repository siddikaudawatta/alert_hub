import {
    fcmToken,
    regData
} from '../redux/selectors';

import { Alert } from 'react-native';
import { delay, put, select } from 'redux-saga/effects';
import api from '../../../services/index';
import * as globalTypes from '../../../store/appStore/types';
import * as types from '../redux/types';

import NavigationService from '../../../navigations/NavigationService';

export function* otpValidate(action) {
    console.log('otpValidate->', action);

    yield put({
        type: globalTypes.SHOW_LOADING
    });
    let userRgData = yield select(regData);
    console.log('userRgData->', userRgData);
    let request = {
        firstName: userRgData.firstName,
        lastName: userRgData.lastName,
        mobileNumber: userRgData.mobileNumber,
        email: userRgData.firstName,
        pin: userRgData.pin,
        otp: action.payload,

    }

    try {
        let rep = yield api(
            'POST',
            'https://alert-hub.onrender.com/api/profile/validate/otp',
            request,

        );
        if (rep && rep.status === 200) {
            Alert.alert(rep.bodyString);
            // NavigationService.navigate('OTPContainer');
            yield put({
                type: globalTypes.HIDE_LOADING
            });
        } else {
            yield put({
                type: globalTypes.HIDE_LOADING
            });
            Alert.alert("FAIL");
        }
        console.log('alertHubAPI->', rep);

    } catch (error) {
        yield put({
            type: globalTypes.HIDE_LOADING
        });
        Alert.alert("FAIL| Status ");
        console.log('API ERROR->', error);
    }



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
        } else {
            yield put({
                type: globalTypes.HIDE_LOADING
            });
            Alert.alert("FAIL");
        }
        console.log('alertHubAPI->', rep);

    } catch (error) {
        yield put({
            type: globalTypes.HIDE_LOADING
        });
        Alert.alert("FAIL| Status ");
        console.log('API ERROR->', error);
    }




}

