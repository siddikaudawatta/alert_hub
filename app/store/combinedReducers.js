/*
 * combines all th existing reducers
 */

import * as appReducer from './appStore/appReducer';
import * as userCreate from '../features/UserCreate/redux/reducers';


export default Object.assign(
    {},

    appReducer,
    userCreate

);
