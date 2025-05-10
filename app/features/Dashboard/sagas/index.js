import { takeLatest } from 'redux-saga/effects';
import * as types from '../redux/types';
import { productList } from './DashboardSaga';

export const dashboardSaga = [
    takeLatest(types.GET_PRODUCT_LIST, productList),


];
