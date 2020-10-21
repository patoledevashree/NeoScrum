import React, { Component, useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { globalStyles } from '../styles/styles';
import Feather from 'react-native-vector-icons/Feather';
import FlatButton from './FlatButton';
import Card from './Card';

export default function Login() {


    const [text, changeText] = useState('');
    const [pwd, changePwd] = useState('')
    return (
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss();
        }}>
            <View style={globalStyles.conatiner}>
                <Text style={styles.text}>Neo<Text style={{ color: 'red' }}>SCRUM</Text></Text>
                <Card>
                    <Text style={globalStyles.textHeader}>Login Page</Text>
                    <Text style={{ fontSize: 18 }}>Email</Text>
                    <TextInput style={globalStyles.textInput}
                        keyboardType='email-address'
                        onChangeText={text => changeText(text)}
                        value={text}
                    />
                    <Text style={{ fontSize: 18 }}>Password</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                        <Feather style={styles.icon} name='eye-off' size={20} color='#05375a'></Feather>
                    </View>
                    <TextInput style={globalStyles.textInput}
                        secureTextEntry
                        onChangeText={pwd => changePwd(pwd)}
                        value={pwd}
                    />
                    <FlatButton text='Login' onPress={() => { console.log('Login Pressed') }}></FlatButton>
                </Card>

            </View>
        </TouchableWithoutFeedback>
    )

}

const styles = StyleSheet.create({
    text: {
        fontSize: 40,
        fontWeight: 'bold',
        paddingBottom: 50,
        textAlign: 'center'
    },
    icon: {
        alignItems: 'flex-end'

    }

})

