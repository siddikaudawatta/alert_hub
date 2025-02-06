import React, { Component } from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import Navigator from './navigations';

export class Root extends Component {
    constructor(props) {
        super(props);
        console.log('Root');
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />
                <Navigator />
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default Root;
