import React, { Component, useEffect } from 'react';
import Navigation from './screens/Navigation';
import Loginnav from './screens/Loginnav';
import { NavigationContainer } from '@react-navigation/native';
import { connect } from 'react-redux';
import  AsyncStorage  from '@react-native-community/async-storage';
import { restoreData } from './Redux/actions/loginAction'


function App({ userData, restoreData }) {

  useEffect(() => {
    restoreUserdata();
  }, [])

  const restoreUserdata = async () => {
    const user = await AsyncStorage.getItem('user');
    console.log('User',user);
    const parseData = await JSON.parse(user);
    console.log('Parsedata',parseData)
    if (user !== null) {
      restoreData(parseData);
    }
  }
  return (
    <NavigationContainer>
      {userData.user_id ?
        <Navigation /> :
        <Loginnav />}
    </NavigationContainer>

  )

}
const mapStateToProps = state => {
  return {
    userData: state.userReducer.user
  }
}
const mapDispatchToProps = dispatch => {
  return {
    restoreData: (userData) => dispatch(restoreData(userData))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)