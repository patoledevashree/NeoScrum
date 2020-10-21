import React, { Component, useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableWithoutFeedback, Keyboard, TouchableOpacity ,Button} from 'react-native';
import { globalStyles } from '../styles/styles';
import Feather from 'react-native-vector-icons/Feather';
import Card from './Card';
import { useNavigation } from '@react-navigation/native';


export default function Login() {

    const [data, setState] = useState({
        email: '',
        pwd: '',
        isEmailvalid: true,
        isPwdvalid: true
    })
    const [text, changeText] = useState('');
    const [pwd, changePwd] = useState('');
    const navigation = useNavigation();

    const handleEmail = (val) => {
        const exp = '^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$';
        console.log(val)
        if (val.match(exp)) {
            setState({
                ...data,
                email: val,
                isEmailvalid: true
            });
            console.log(data)
        }
        else {
            setState({
                ...data,
                email: val,
                isEmailvalid: false
            });
        }

    };

    const handlePassword = (val) => {
        console.log(val)
        if (val.trim().length >= 4) {
            setState({
                ...data,
                pwd: val,
                isPwdvalid: true
            });
            console.log(data)
        }
        else {
            setState({
                ...data,
                pwd: val,
                isPwdvalid: false
            });
        }

    };
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
                        onChangeText={(val) => { handleEmail(val) }}
                        value={data.email}
                    />
                    {data.isEmailvalid ? null :
                        <View>
                            <Text style={{ color: 'red', fontSize: 12 }}>Invalid Email</Text>
                        </View>

                    }
                    <Text style={{ fontSize: 18 }}>Password</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                        <Feather style={styles.icon} name='eye-off' size={20} color='#05375a'></Feather>
                    </View>
                    <TextInput style={globalStyles.textInput}
                        secureTextEntry
                        onChangeText={(val) => { handlePassword(val) }}
                        value={data.pwd}
                    />
                    {data.isPwdvalid ? null :
                        <View>
                            <Text style={{ color: 'red', fontSize: 12 }}>Invalid Password</Text>
                        </View>

                    }
                    <View style={styles.buttons}>
                        <View style={{ width: 100, borderRadius: 4, marginTop:10}}>
                            <Button title='Login' color='blue' onPress={() => { navigation.goBack() }} />
                        </View>
                        <TouchableOpacity onPress={() => { navigation.navigate('Register') }}>
                            <Text style={styles.underLineText}>Register Here</Text>
                        </TouchableOpacity>
                    </View>
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

    },
    underLineText: {
        fontSize: 15,
        textDecorationLine: 'underline',
        color: '#4D61EC',
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 20
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    }

})


