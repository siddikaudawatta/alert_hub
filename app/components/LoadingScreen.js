// src/components/LoadingScreen.js
import React from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';

const LoadingScreen = () => (
    <View style={styles.overlay}>
        <ActivityIndicator size="large" color="#1877f2" />
    </View>
);

const styles = StyleSheet.create({
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(255,255,255,0.7)',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 9999,
    },
});

export default LoadingScreen;
