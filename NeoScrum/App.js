import React, { Component } from 'react';
import {StyleSheet,View,Text} from 'react-native';
import Login from './screens/Login';
import Register from './screens/Register';
import NewEmployee from './screens/NewEmployee';
import Dashboard from './screens/Dashboard';
import Navigation from './screens/Navigation';
import AddFeedBack from './screens/AddFeedBack';

export default class App extends Component{
  render(){
    console.log('Page Refresh')
    return(
      <Login/>
      // <Register/>
      // <NewEmployee></NewEmployee>
      // <Dashboard/>
      // <Navigation/>
      // <AddFeedBack/>
    )
  }
}

