import {
    fcmToken,
    accessToken
} from '../redux/selectors';

import { Alert } from 'react-native';
import { delay, put, select } from 'redux-saga/effects';
import api from '../../../services/index';
import * as globalTypes from '../../../store/appStore/types';
import * as types from '../redux/types';

import NavigationService from '../../../navigations/NavigationService';


export function* productList() {
    console.log('productList->');
    yield put({
        type: globalTypes.SHOW_LOADING
    });
    let token = yield select(accessToken);

    try {
        let rep = yield api(

            'GET',
            'https://alert-hub.onrender.com/api/services',
            null,
            token,
            true

        );
        if (rep && rep.status === 200) {

            yield put({
                type: globalTypes.HIDE_LOADING
            });
            yield put({
                type: types.SAVE_PRODUCT_LIST,
                payload: rep.data

            });
        } else {
            yield put({
                type: globalTypes.HIDE_LOADING
            });

        }
        console.log('productList res->', rep);

    } catch (error) {
        console.log('error->', error);
        yield put({
            type: globalTypes.HIDE_LOADING
        });

    }




}


