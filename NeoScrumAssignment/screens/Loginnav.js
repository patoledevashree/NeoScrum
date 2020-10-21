import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import Login from '../screens/Login';
import Register from '../screens/Register';

const Stack = createStackNavigator();

export default class Navigation extends Component {
    render() {
        return (
            // <NavigationContainer>
                <Stack.Navigator headerMode= {"none"}>
                    <Stack.Screen name='Login' component={Login} />
                    <Stack.Screen name='Register' component={Register} />
                </Stack.Navigator>
            // </NavigationContainer>
        )
    }
}