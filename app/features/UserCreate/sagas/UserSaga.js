import {
    fcmToken
} from '../redux/selectors';


import { select } from 'redux-saga/effects';
import api from '../../../services/index';

export function* login(payload) {


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


