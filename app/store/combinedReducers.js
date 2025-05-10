/*
 * combines all th existing reducers
 */

import * as appReducer from './appStore/appReducer';
import * as userCreate from '../features/UserCreate/redux/reducers';
import * as dashboardReducer from '../features/Dashboard/redux/reducers';



export default Object.assign(
    {},

    appReducer,
    userCreate,
    dashboardReducer

);
