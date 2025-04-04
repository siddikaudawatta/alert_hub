
// import messaging from '@react-native-firebase/messaging';
// import { getApp } from 'firebase/app';
// import { getMessaging, getToken } from 'firebase/messaging';
// import { getApp } from '@react-native-firebase/app';
// import { getMessaging, getToken } from '@react-native-firebase/messaging';
import React, { Component } from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import Navigator from './navigations';
import * as appActions from './store/appStore/appActions';

export class Root extends Component {
    constructor(props) {
        super(props);
        console.log('Root');
        this.state = {
            fcmToken: '',
        };
    }

    async componentDidMount() {
        await this.requestUserPermission();


    }

    // Request permission for notifications
    async requestUserPermission() {
        // const authStatus = await messaging().requestPermission();
        // const enabled =
        //     authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
        //     authStatus === messaging.AuthorizationStatus.PROVISIONAL;

        // if (enabled) {
        this.getFCMToken();
        //     console.log('Notification permission granted.');
        // } else {
        //     console.log('Notification permission denied.');
        // }
    }

    // Get FCM token
    // async getFCMToken() {
    //     const app = getApp();
    //     const messaging = getMessaging(app);
    //     const token = await getToken(messaging);
    //     this.props.storeFCMToken(token);
    //     this.setState({ fcmToken: token });
    // }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />
                <Navigator />
            </SafeAreaView>
        );
    }
}

function mapStateToProps(state) {
    return {

    };
}

export function mapDispatchToProps(dispatch) {
    return {
        storeFCMToken: (payload) => dispatch(appActions.storeFCMToken(payload)),

    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Root);

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});


