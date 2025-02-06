// Router
import React, { Component } from 'react';
import { View } from 'react-native';
import NavigationService from './navigations/NavigationService';

class Router extends Component {
    componentDidMount() {
        console.log('Router-mounted');
        setTimeout(() => {
            NavigationService.fullReset('UserSignUpContainer');
        }, 0);
    }

    render() {
        return <View />;
    }
}

export default Router;