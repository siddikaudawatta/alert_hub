import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Router from '../Router';
import LanguageSelectContainer from '../features/UserCreate/Screens/LanguageSelectContainer';
import OTPContainer from '../features/UserCreate/Screens/OTPContainer';
import UserSignUpContainer from '../features/UserCreate/Screens/UserSignUpCantainer';


const Stack = createStackNavigator();

const NavigationStack = () => {
    console.log('NavigationStack');

    return (
        <Stack.Navigator initialRouteName="Router">
            <Stack.Screen name="Router" component={Router} />
            <Stack.Screen
                name="UserSignUpContainer"
                component={UserSignUpContainer}
                options={{
                    headerShown: false, // Hides the header
                }}
            />
            <Stack.Screen
                name="OTPContainer"
                component={OTPContainer}
                options={{
                    headerShown: false, // Hides the header
                }}
            />
            <Stack.Screen
                name="LanguageSelectContainer"
                component={LanguageSelectContainer}
                options={{
                    headerShown: false, // Hides the header
                }}
            />
        </Stack.Navigator>
    );
};

export default NavigationStack;
