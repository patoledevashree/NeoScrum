import React, { Component } from 'react';
import {View ,Text,TouchableOpacity} from 'react-native';

import Dashboard from './Dashboard';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import Login from './Login';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

export default class Navigation extends Component{
    render(){
        createHomeStack = ({ navigation }) =>
        <Stack.Navigator>
            <Stack.Screen name='Dashboard' component={Dashboard} options={{ headerLeft: () => (<TouchableOpacity onPress={navigation.openDrawer}><FontAwesome name='trophy' size={20} /></TouchableOpacity>) }} />
        </Stack.Navigator>

        createAddfeedback =({ navigation }) =>
        <Stack.Navigator>
            <Stack.Screen name='AddFeedBack' component ={Login} options={{ headerLeft: () => (<TouchableOpacity onPress={navigation.openDrawer}><FontAwesome name='trophy' size={20} /></TouchableOpacity>) }}/>
        </Stack.Navigator>
        return(
            <NavigationContainer>
                <Drawer.Navigator>
                    <Drawer.Screen name ='Dashboard' component={createHomeStack} />
                    <Drawer.Screen name ='Add FeedBack' component={createAddfeedback} />
                    <Drawer.Screen name ='LogOut' component={createHomeStack} />
                </Drawer.Navigator>
            </NavigationContainer>
        )
    }
}