import React, { Component } from 'react';
import {StyleSheet,View,Text} from 'react-native';
import Login from './screens/Login';
import Register from './screens/Register';
import Dashboard from './screens/Dashboard';
import AddFeedBack from './screens/AddFeedback';
import Feedback from './screens/Feedback';
import Navigation from './screens/Navigation';
import Loginnav from './screens/Loginnav';
import { NavigationContainer } from '@react-navigation/native';
import Submitfeedback from './screens/SubmitFeedback';

export default class App extends Component{
  render(){
    console.log('Page Refresh')
    return(
      // <Login/>
      // <Register/>
      // <NewEmployee></NewEmployee>
      // <Dashboard/>
      // <Navigation/>
      // <AddFeedBack/>
      // <Feedback/>
     <Submitfeedback/>
      

    )
  }
}