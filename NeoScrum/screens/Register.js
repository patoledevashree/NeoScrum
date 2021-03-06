import React, { useState } from 'react';
import { TouchableOpacity, StyleSheet, View, Text, TextInput, Keyboard, Button, Image } from 'react-native';
import { globalStyles } from '../styles/styles'
import FlatButton from './FlatButton';
import ImagePicker from 'react-native-image-picker';
import Card from './Card'

export default function Register() {
    // const [empName, changeEmpName] = useState('');
    // const [email, changeEmail] = useState('');
    // const [photo, setPhoto] = useState('null')
    const [data, setState] = useState({
        empName: '',
        email: '',
        photo: 'null',
        isvalidEmpName: true,
        isvalidEmail: true,
    })

    const handelPhoto = () => {
        const options = {
            noData: true,
        };
        ImagePicker.launchImageLibrary(options, response => {
            console.log('response', response)
            if (response.uri) {
                setState({
                    ...data,
                    photo: response,
                })
                
            }
        });
    };

    const handleEmpName = (val) => {
        console.log(val)
        if (val.trim().length != 0) {
            setState({
                ...data,
                empName: val,
                isvalidEmpName: true
            });
            console.log(data)
        }
        else {
            setState({
                ...data,
                empName: val,
                isvalidEmpName: false
            });
        }

    };

    const handelEmail = (val) => {
        const exp = '^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$';
        if (val.match(exp)) {
            setState({
                ...data,
                email: val,
                isvalidEmail: true,
            });
        }
        else {
            setState({
                ...data,
                email: val,
                isvalidEmail: false
            });
        }

    }
    return (
       
            <View style={globalStyles.conatiner}>
                <Text style={styles.text}>Neo<Text style={{ color: 'red' }}>SCRUM</Text></Text>
                <Card>
                    <Text style={globalStyles.textHeader}>Enter New Developer</Text>
                    <Text style={{ fontSize: 18 }}>Employee Name *</Text>
                    <TextInput
                        style={globalStyles.textInput}
                        onChangeText={(val) => { handleEmpName(val)}}
                        value={data.empName}
                    />
                    {data.isvalidEmpName ? null :
                    <View>
                        <Text style={{color:'red',fontSize:12}}>Employee name should not be empty</Text>
                    </View>
                       
                    }
                    <Text style={{ fontSize: 18 }}>Email *</Text>
                    <TextInput
                        style={globalStyles.textInput}
                        onChangeText={val => { handelEmail(val)}}
                        value={data.email}
                    />
                    {data.isvalidEmail ? null :
                    <View>
                        <Text style={{color:'red',fontSize:12}}>Invalid Email</Text>
                    </View>
                       
                    }
                    <TouchableOpacity onPress={() => { handelPhoto() }}>
                        <Text style={styles.photo}>Choose File</Text>
                    </TouchableOpacity>
                    <Image source={{ uri: data.photo.uri }}
                        style={{ width: 30, height: 30 }} />
                    <FlatButton text='Submit' onPress={() => { console.log('Login Pressed') }}></FlatButton>
                </Card>
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

