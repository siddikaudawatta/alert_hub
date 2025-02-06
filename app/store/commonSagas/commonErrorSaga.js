import i18n from 'i18n-js';
import { call, put } from 'redux-saga/effects';
import AlertConstants from '../../components/Alerts/AlertConstants';
import PayloadConstants from '../../components/PopupPayloads/PopupPayloadConstants';
import * as globalTypes from '../appStore/types';
import NavigationService from '../../navigation/NavigationService';

export function* underMaintenance(status) {
    console.log('IN underMaintenance saga');
    const statusCode = status;
    try {
        if (statusCode === 500 || statusCode === 404) {
            console.log('ERROR underMaintenance STATUS CODE:: ', statusCode);
            yield put({
                type: globalTypes.SHOW_MATERIAL_ALERT,
                payload: PayloadConstants.SOMETHING_WENT_WRONG
            });
        }
    } catch (error) {
        console.log('Error underMaintenance : ', error.response);
    }
}

export function* invalidGrant(status) {
    const statusCode = status;
    console.log('ERROR invalidGrant STATUS CODE:: ', statusCode);

    if (statusCode === 401) {
        // yield put({ type: globalTypes.CLEAR_TOKEN });
        yield put({
            type: globalTypes.SHOW_MATERIAL_ALERT,
            payload: {
                materialShow: true,
                materialType: AlertConstants.LOGO_IMAGE,
                materialTitle: i18n.t(
                    'common_popups.authentication_popup.title'
                ),
                materialMessage: i18n.t(
                    'common_popups.authentication_popup.message'
                ),
                materialSpecialView: '',
                materialPositiveButton: true,
                materialPositiveButtonActionType: '',
                materialPositiveButtonText: i18n.t(
                    'common_popups.authentication_popup.btnText'
                ),
                materialNegativeButton: false,
                materialNegativeButtonText: '',
                materialNegativeButtonActionType: '',
                materialNegativeButtonInfo: false
            }
        });
    }
}

export function* handleErrors(error) {
    console.log('IN handleErrors saga-s1->', error);

    // Make all currently visible loaders invisible here.
    yield put({
        type: globalTypes.FULL_SCREEN_LOADER,
        payload: { visibility: false, text: '' }
    });

    if (error.reason == 'Network error') {
        yield put({
            type: globalTypes.SHOW_MATERIAL_ALERT,
            payload: PayloadConstants.NETWORK_FAILURE
        });
    }
    if (
        error.response &&
        (error.response.data.status === 500 ||
            error.response.data.status === 404 || error.response.status === 500 || error.response.status === 400 || error.response.data.status === 503)
    ) {
        yield put({
            type: globalTypes.SHOW_MATERIAL_ALERT,
            payload: PayloadConstants.SYSTEM_MAINTAIN_ALERT
        });
    } else if (error.message === 'Network Error') {
        yield call(underMaintenance, 404);
        yield put({
            type: globalTypes.SHOW_MATERIAL_ALERT,
            payload: PayloadConstants.SOMETHING_WENT_WRONG
        });
    } else if (error.response && (error.response.data.status === 401 || error.response.status === 401)) {
        yield call(invalidGrant, 401);
    } else if (
        error.response &&
        error.response.data.error === 'invalid_request'
    ) {
        //yield put({ type: globalTypes.CLEAR_TOKEN });
        yield put({
            type: globalTypes.SHOW_MATERIAL_ALERT,
            payload: {
                materialShow: true,
                materialType: AlertConstants.LOGO_IMAGE,
                materialTitle: i18n.t(
                    'common_popups.authentication_popup.title'
                ),
                materialMessage: i18n.t(
                    'common_popups.authentication_popup.message'
                ),
                materialSpecialView: '',
                materialPositiveButton: true,
                materialPositiveButtonActionType: AlertConstants.FORCE_LOGOUT,
                materialPositiveButtonText: i18n.t(
                    'common_popups.authentication_popup.btnText'
                ),
                materialNegativeButton: false,
                materialNegativeButtonText: '',
                materialNegativeButtonActionType: '',
                materialNegativeButtonInfo: false
            }
        });
    } else if (
        (error.response && error.response.data.status === 'timeout') ||
        error.response.data.status === 'The request timed out.'
    ) {
        yield put({
            type: globalTypes.SHOW_MATERIAL_ALERT,
            payload: PayloadConstants.SOMETHING_WENT_WRONG_NAVIGATE_DASHBOARD
        });
    }
}

export function* handleDashboardErrors(error) {
    console.log('IN handleErrors saga-s2->', error);

    // Make all currently visible loaders invisible here.
    yield put({
        type: globalTypes.FULL_SCREEN_LOADER,
        payload: { visibility: false, text: '' }
    });

    if (error.reason == 'Network error') {
        yield put({
            type: globalTypes.SHOW_MATERIAL_ALERT,
            payload: PayloadConstants.NETWORK_FAILURE
        });
    }
    if (error.response && error.response.data.status === 404) {
        yield call(underMaintenance, error.response.status);
        yield put({
            type: globalTypes.SHOW_MATERIAL_ALERT,
            payload: PayloadConstants.SYSTEM_MAINTAIN_ALERT
        });
    } else if (error.message === 'Network Error') {
        yield call(underMaintenance, 404);
        yield put({
            type: globalTypes.SHOW_MATERIAL_ALERT,
            payload: PayloadConstants.SOMETHING_WENT_WRONG
        });
    } else if (error.response && (error.response.data.status === 500 || error.response.status === 500)) {
        yield put({
            type: globalTypes.SHOW_MATERIAL_ALERT,
            payload: PayloadConstants.SYSTEM_MAINTAIN_ALERT
        });
    } else if (error.response && error.response.data.status === 401) {
        yield call(invalidGrant, error.response.data.status);
    } else if (
        error.response &&
        error.response.data.error === 'invalid_request'
    ) {
        //yield put({ type: globalTypes.CLEAR_TOKEN });
        yield put({
            type: globalTypes.SHOW_MATERIAL_ALERT,
            payload: {
                materialShow: true,
                materialType: AlertConstants.LOGO_IMAGE,
                materialTitle: i18n.t(
                    'common_popups.authentication_popup.title'
                ),
                materialMessage: i18n.t(
                    'common_popups.authentication_popup.message'
                ),
                materialSpecialView: '',
                materialPositiveButton: true,
                materialPositiveButtonActionType: AlertConstants.FORCE_LOGOUT,
                materialPositiveButtonText: i18n.t(
                    'common_popups.authentication_popup.btnText'
                ),
                materialNegativeButton: false,
                materialNegativeButtonText: '',
                materialNegativeButtonActionType: '',
                materialNegativeButtonInfo: false
            }
        });
    } else if (error.response && error.response.data.status === 'timeout') {
        yield put({
            type: globalTypes.SHOW_MATERIAL_ALERT,
            payload: PayloadConstants.SOMETHING_WENT_WRONG_NAVIGATE_DASHBOARD
        });
    }
}

export function* handleTimeoutErrors(data) {
    console.log('IN handleErrors saga-s2->', data);

    // Make all currently visible loaders invisible here.
    yield put({
        type: globalTypes.FULL_SCREEN_LOADER,
        payload: { visibility: false, text: '' }
    });
    NavigationService.navigate('EzCashWalletCreationSuccessContainer', {
        header: data.header,
        discripsion: data.discripsion,
        okcta: data.okcta,
        status: data.status
    });
}
