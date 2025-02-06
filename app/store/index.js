import AsyncStorage from '@react-native-async-storage/async-storage'; // default: localStorage if web, AsyncStorage if react-native
import { applyMiddleware, compose, createStore } from 'redux';
import logger from 'redux-logger';
import { persistCombineReducers, persistStore } from 'redux-persist';
// import { createWhitelistFilter } from 'redux-persist-transform-filter';
import createSagaMiddleware from 'redux-saga';
import rootReducers from './combinedReducers'; // where reducers is a object of reducers
import sagas from './combinedSagas';

const config = {
    timeout: 50000,
    key: 'root',
    storage: AsyncStorage,
    whitelist: [
        'appReducer',
    ],
    debug: __DEV__, //to get useful logging

};

const middleware = [];
let sagaMiddleware;
sagaMiddleware = createSagaMiddleware();

middleware.push(sagaMiddleware);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducers = persistCombineReducers(config, rootReducers);

// console.log('reducers', rootReducers);

let enhancers = [];

if (__DEV__) {
    enhancers = [composeEnhancers(applyMiddleware(...middleware, logger))];
} else {
    enhancers = [composeEnhancers(applyMiddleware(...middleware))];
}

// const initialState = {};
const persistConfig = { enhancers };
const store = createStore(reducers, undefined, compose(...enhancers));
const persistor = persistStore(store, persistConfig, () => {
    //   console.log('Test', store.getState());
});
const configureStore = () => {
    return { persistor, store };
};

sagaMiddleware.run(sagas);

export default configureStore;
