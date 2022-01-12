/* eslint-disable prettier/prettier */
/**
 * @format
 */
import React from 'react';
import { AppRegistry } from 'react-native';
import App from './App.js';
import { name as appName } from './app.json';
import store from './redux-saga/store/configureStore';
import { Provider } from 'react-redux';

const Root = () => {
    return (
        <Provider store={store}>
            <App />
        </Provider>
    );
};
AppRegistry.registerComponent(appName, () => Root);
