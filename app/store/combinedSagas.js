/**
 *  Redux saga class init
 * Import every feature saga here
 *
 */

import { all } from 'redux-saga/effects';

import { userCreateSaga } from '../features/UserCreate/sagas';


export default function* rootSaga() {
    yield all([
        ...userCreateSaga,
    ]);
}
