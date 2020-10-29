import React, { Component, useEffect, useState } from 'react';
import Navigation from './screens/Navigation';
import Loginnav from './screens/Loginnav';
import { NavigationContainer } from '@react-navigation/native';
import { connect } from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
import { restoreData } from './Redux/actions/loginAction'
import { ActivityIndicator,StyleSheet ,View} from 'react-native'


function App({ userData, restoreData }) {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    restoreUserdata();
  }, [])

  const restoreUserdata = async () => {
    const user = await AsyncStorage.getItem('user');
    console.log('User', user);
    const parseData = await JSON.parse(user);
    console.log('Parsedata', parseData)
    if (user !== null) {
      restoreData(parseData);
    }
    setLoading(false);
  }
  return (
    isLoading === true ?
      <View style={{justifyContent:'center',marginVertical:300}}>
        <ActivityIndicator size={"large"} color={'blue'} />
      </View> :
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