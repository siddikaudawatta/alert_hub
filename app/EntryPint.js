/**
 * React Native App
 * Everything starts from the EntryPoint
 */
// import { initializeApp } from '@react-native-firebase/app';
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import Root from './Root';
import configureStore from './store';
export const { persistor, store } = configureStore();

export default class EntryPoint extends Component {
    constructor(props) {
        super(props);
        console.log('EntryPoint');
        // initializeApp();
    }


    render() {
        return (
            <Provider store={store}>
                <PersistGate persistor={persistor}>
                    <Root />
                </PersistGate>
            </Provider>
        );
    }
}