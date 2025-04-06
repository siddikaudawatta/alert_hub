

import { getApp } from '@react-native-firebase/app';
import {
    AuthorizationStatus,
    getMessaging,
    getToken,
    hasPermission,
    onMessage,
    requestPermission
} from '@react-native-firebase/messaging';
import React, { Component } from 'react';
import { Alert, SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import LoadingScreen from './components/LoadingScreen';
import Navigator from './navigations';
import * as appActions from './store/appStore/appActions';
export class Root extends Component {
    constructor(props) {
        super(props);
        console.log('Root-Alerthub');
        this.state = {
            fcmToken: '',
        };
        this.initFCM();
    }

    componentWillUnmount() {
        if (this.unsubscribeOnMessage) {
            this.unsubscribeOnMessage();
        }
    }

    async initFCM() {
        console.log('initFCM');
        const app = getApp();
        const messaging = getMessaging(app);

        const authStatus = await hasPermission(messaging);
        const enabled =
            authStatus === AuthorizationStatus.AUTHORIZED ||
            authStatus === AuthorizationStatus.PROVISIONAL;


        if (!enabled) {
            await requestPermission(messaging);
        }
        console.log('enabled', messaging);
        try {
            const token = await getToken(messaging);
            this.props.storeFCMToken(token);
            console.log('FCM Token: ', token);
        } catch (error) {
            console.log('FCM Token: ', error);
        }


        this.unsubscribeOnMessage = onMessage(messaging, async remoteMessage => {
            Alert.alert('New FCM Message', JSON.stringify(remoteMessage.notification));
        });


    }

    // componentDidMount() {
    //     // this.initFCM();
    //     console.log("componentDidMount");
    //     this.initFCM();
    // }

    // Request permission for notifications
    // async requestUserPermission() {
    // const authStatus = await messaging().requestPermission();
    // const enabled =
    //     authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    //     authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    // if (enabled) {
    // this.getFCMToken();
    //     console.log('Notification permission granted.');
    // } else {
    //     console.log('Notification permission denied.');
    // }
    // }

    // Get FCM token
    // async getFCMToken() {
    //     const app = getApp();
    //     const messaging = getMessaging(app);
    //     const token = await getToken(messaging);
    //     this.props.storeFCMToken(token);
    //     this.setState({ fcmToken: token });
    // }



    render() {
        const { isLoading } = this.props;
        return (
            <SafeAreaView style={styles.container}>
                <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />
                <Navigator />
                {isLoading && <LoadingScreen />}
            </SafeAreaView>
        );
    }
}

function mapStateToProps(state) {
    return {
        isLoading: state.appReducer.isLoading,
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


