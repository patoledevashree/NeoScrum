import React, { useState } from 'react';
import { TouchableOpacity, StyleSheet, View, Text, TextInput, Keyboard, Button, Image } from 'react-native';
import { globalStyles } from '../styles/styles'
import FlatButton from './FlatButton';
import ImagePicker from 'react-native-image-picker';
import Card from './Card'


export default function NewEmployee() {
    const [empName, changeEmpName] = useState('');
    const [email, changeEmail] = useState('');
    const [photo, setPhoto] = useState('null')

    const handelPhoto = () => {
        const options = {
            noData: true,
        };
        ImagePicker.launchImageLibrary(options, response => {
            console.log('response', response)
            if (response.uri) {
                // setState({
                //     ...data,
                //     photo: response,
                // })
                setPhoto(response)
            }
        });
    };
    return (
        
            <View style={globalStyles.conatiner}>
                <Text style={styles.text}>Neo<Text style={{ color: 'red' }}>SCRUM</Text></Text>
                
                    <Text style={globalStyles.textHeader}>Enter New Developer</Text>
                    <Text style={{ fontSize: 18 }}>Employee Name *</Text>
                    <TextInput
                    style={globalStyles.textInput}
                    onChangeText={text=>changeEmpName(text)}
                    value={empName}/>
                
            </View>
       
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 40,
        fontWeight: 'bold',
        paddingBottom: 50,
        textAlign: 'center'
    },
    photo: {
        width: 130,
        backgroundColor: '#a0a0a0',
        marginVertical: 10,
        padding: 10,
        borderRadius: 3,
        textAlign: 'center',
        fontSize: 18
    }
})