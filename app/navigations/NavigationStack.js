import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Router from '../Router';
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
        </Stack.Navigator>
    );
};

export default NavigationStack;
