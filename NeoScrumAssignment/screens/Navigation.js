import React, { Component } from 'react';
import {View ,Text,TouchableOpacity} from 'react-native';

import Dashboard from './Dashboard';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import Icon from 'react-native-vector-icons/Ionicons';

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import DrawerContent from './DrawerContent';
import SubmitFeedback from './SubmitFeedback';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

/**
 * @author Devashree Patole
 * @description This file contains the drawer navigation 
 *              of dashboard and addfeedback screens.
 * @returns navigation of screens
 */

export default class Navigation extends Component{
    render(){
        createHomeStack = ({ navigation }) =>
        <Stack.Navigator>
            <Stack.Screen name='Dashboard' component={Dashboard} 
            options={{ 
                headerLeft: () => (
               <Icon.Button name="ios-menu" size={25} color='black' backgroundColor='white' onPress={() => navigation.openDrawer()}></Icon.Button>) }} />
        </Stack.Navigator>
         createFeedbackStack = ({ navigation }) =>
         <Stack.Navigator>
             <Stack.Screen name='Add Feedback' component={SubmitFeedback} 
             options={{ 
                 headerLeft: () => (
                <Icon.Button name="ios-menu" size={25} color='black' backgroundColor='white' onPress={() => navigation.openDrawer()}></Icon.Button>) }} />
         </Stack.Navigator>

        return(
            // <NavigationContainer>
                <Drawer.Navigator drawerContent={props => <DrawerContent {...props}/>}>
                    <Drawer.Screen name ='Dashboard' component={createHomeStack}
                    options={{
                        drawerIcon:(size)=>{
                            return(
                            <FontAwesome name='home'
                            size={20}
                           color={'#777'}
                            />)
                        }
                    }} />
                    <Drawer.Screen name ='Add Feedback' component={createFeedbackStack}
                    options={{
                        drawerIcon:(size)=>{
                            return(
                            <FontAwesome name='edit'
                            size={20}
                           color={'#777'}
                            />)
                        }
                    }}
                    />
                </Drawer.Navigator>
            // </NavigationContainer>
        )
    }
}