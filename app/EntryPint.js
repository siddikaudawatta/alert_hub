/**
 * React Native App
 * Everything starts from the EntryPoint
 */
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import configureStore from './store';
export const { persistor, store } = configureStore();

import Root from './Root';

export default class EntryPoint extends Component {
    constructor(props) {
        super(props);
        console.log('EntryPoint');
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