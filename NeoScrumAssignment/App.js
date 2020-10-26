import React, { Component } from 'react';
import Navigation from './screens/Navigation';
import Loginnav from './screens/Loginnav';
import { NavigationContainer } from '@react-navigation/native';
import { connect } from 'react-redux'


function App({userData}){
  return(
  <NavigationContainer>
    {userData.user_id ?
    <Navigation/>:
    <Loginnav/>}
  </NavigationContainer>
    
  )
}
const mapStateToProps = state => {
  return {
    userData: state.userReducer.user
  }
}

export default connect(mapStateToProps)(App)