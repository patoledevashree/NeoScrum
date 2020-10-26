import React, { useEffect, useState } from 'react';
import {
    TouchableOpacity,
    StyleSheet,
    View,
    Text,
    TextInput,
    Keyboard,
    Button,
    Image, Alert
} from 'react-native';
import { globalStyles } from '../styles/styles'
import ImagePicker from 'react-native-image-picker';
import Card from './Card';
import { ScrollView, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import Toast from 'react-native-simple-toast';

/**
 * @author Devashree Patole
 * @description This screen is for the user to register into the NeoscrumPropTypes.
 *              It contains the Employee Name and Email of userPropTypes.
 * @returns JSX of register page
 */
export default function Register() {

    const [register, setState] = useState({
        empName: '',
        email: '',
        photo: 'null',
        isvalidEmpName: true,
        isvalidEmail: true,
    })
    const navigation = useNavigation();

    const handelPhoto = () => {
        const options = {
            noData: true,
        };
        ImagePicker.launchImageLibrary(options, response => {
            console.log('response', response)
            if (response.uri) {
                setState({
                    ...register,
                    photo: response,
                })

            }
        });
    };

    const handleEmpName = (val) => {
        console.log(val)
        if (val.trim().length != 0) {
            setState({
                ...register,
                empName: val,
                isvalidEmpName: true
            });
            console.log(register)
        }
        else {
            setState({
                ...register,
                empName: val,
                isvalidEmpName: false
            });
        }

    };

    const handelEmail = (val) => {
        const exp = '^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$';
        if (val.match(exp)) {
            setState({
                ...register,
                email: val,
                isvalidEmail: true,
            });
        }
        else {
            setState({
                ...register,
                email: val,
                isvalidEmail: false
            });
        }

    }
    const handleSubmit = () => {
        axios.post('http://180.149.241.208:3047/registration', {
            user_name: register.empName,
            user_email: register.email,
            profile_image: register.photo

        })
            .then(response => {
                console.log(response)
               Toast.show('Registered successfully');
               navigation.goBack();
            })
            .catch(err => {
                console.log(err)
                Toast.show('Something Went Wrong')
            })
    }

    return (
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss();
        }}>
            <ScrollView>
                <View style={styles.container}>
                    <Text style={styles.text}>Neo<Text style={{ color: 'red' }}>SCRUM</Text></Text>

                    <Card>

                        <Text style={globalStyles.textHeader}>Enter New Developer</Text>
                        <Text style={{ fontSize: 18 }}>Employee Name *</Text>
                        <TextInput
                            style={globalStyles.textInput}
                            onChangeText={(val) => { handleEmpName(val) }}
                            value={register.empName}
                        />
                        {register.isvalidEmpName ? null :
                            <View>
                                <Text style={{ color: 'red', fontSize: 12 }}>Employee name should not be empty</Text>
                            </View>

                        }
                        <Text style={{ fontSize: 18 }}>Email *</Text>
                        <TextInput
                            style={globalStyles.textInput}
                            onChangeText={val => { handelEmail(val) }}
                            value={register.email}
                        />
                        {register.isvalidEmail ? null :
                            <View>
                                <Text style={{ color: 'red', fontSize: 12 }}>Invalid Email</Text>
                            </View>

                        }
                        <TouchableOpacity onPress={() => { handelPhoto() }}>
                            <Text style={styles.photo}>Choose File</Text>
                        </TouchableOpacity>
                        <Image source={{ uri: register.photo.uri }}
                            style={{ width: 30, height: 30 }} />
                        <View style={{ width: 100, borderRadius: 4, marginTop: 10 }}>
                            <Button title='Register' color='blue'
                                onPress={() => handleSubmit()}
                                disabled={!register.email.length > 0 || !register.empName.length > 0
                                    || !register.isvalidEmail === true || !register.isvalidEmpName === true}
                            />
                        </View>

                    </Card>

                </View>
            </ScrollView>
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
    photo: {
        width: 130,
        backgroundColor: '#a0a0a0',
        marginVertical: 10,
        padding: 10,
        borderRadius: 3,
        textAlign: 'center',
        fontSize: 18
    },
    container: {
        marginHorizontal: 50,
        marginVertical: 70
    }
})


