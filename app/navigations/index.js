// AppNavigator
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import NavigationService from './NavigationService';
import NavigationStack from './NavigationStack';

const AppNavigator = () => {
    const onNavigatorReady = (navigatorRef) => {
        NavigationService.setTopLevelNavigator(navigatorRef);
    };

    return (
        <View style={styles.container}>
            <NavigationContainer ref={onNavigatorReady}>
                <NavigationStack />
            </NavigationContainer>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default AppNavigator;