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
import { Formik } from 'formik';
import * as yup from 'yup';


const validationSchema = yup.object({
    email: yup
        .string()
        .required()
        .email(),
    empName: yup
        .string()
        .required()
        .min(4)
})
/**
 * @author Devashree Patole
 * @description This screen is for the user to register into the NeoscrumPropTypes.
 *              It contains the Employee Name and Email of userPropTypes.
 * @returns JSX of register page
 */
export default function Register() {
    const [photo,setPhoto] = useState('');

    const navigation = useNavigation();

    const handelPhoto = () => {
        const options = {
            noData: true,
        };
        ImagePicker.launchImageLibrary(options, response => {
            console.log('response', response)
            if (response.uri) {
                setPhoto({
                    photo: response,
                })

            }
        });
    };


    return (
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss();
        }}>
            <ScrollView>
                <View style={styles.container}>
                    <Text style={styles.text}>Neo<Text style={{ color: 'red' }}>SCRUM</Text></Text>

                    <Card>
                    <Text style={globalStyles.textHeader}>Enter New Developer</Text>
                        <Formik
                            initialValues={{ empName: '', email: '' }}
                            validationSchema={validationSchema}
                            onSubmit={(values) => {
                                console.log(values)
                                console.log(photo)
                                // axios.post('http://180.149.241.208:3047/registration', {
                                //     user_name: values.empName,
                                //     user_email: values.email,
                                //     profile_image: photo

                                // })
                                //     .then(response => {
                                //         console.log(response)
                                //         Toast.show('Registered successfully');
                                //         navigation.goBack();
                                //     })
                                //     .catch(err => {
                                //         console.log(err)
                                //         Toast.show('Something Went Wrong')
                                //     })
                            }}
                        >
                            {(props) => (
                                <View>
                                    
                                    <View>
                                        <Text style={{ fontSize: 18 }}>Employee Name *</Text>
                                        <TextInput
                                            style={globalStyles.textInput}
                                            onChangeText={props.handleChange('empName')}
                                            value={props.values.empName}
                                            onBlur={props.handleBlur('empName')}
                                        />
                                        <Text style={styles.error}>
                                            {props.touched.empName && props.errors.empName}
                                        </Text>
                                    </View>
                                    <View>
                                        <Text style={{ fontSize: 18 }}>Email *</Text>
                                        <TextInput
                                            style={globalStyles.textInput}
                                            onChangeText={props.handleChange('email')}
                                            value={props.values.email}
                                            onBlur={props.handleBlur('email')}
                                        />
                                        <Text style={styles.error}>
                                            {props.touched.email && props.errors.email}
                                        </Text>
                                    </View>
                                    <TouchableOpacity onPress={() => { handelPhoto() }}>
                                        <Text style={styles.photo}>Choose File</Text>
                                    </TouchableOpacity>
                                    <Image source={{ uri: photo.uri }}
                                        style={{ width: 30, height: 30 }} />
                                    <View style={{ width: 100, borderRadius: 4, marginTop: 10 }}>
                                        <Button title='Register' color='blue'
                                            onPress={props.handleSubmit}
                                            disabled={!props.values.email.length > 0 || !props.values.empName.length > 0}
                                        />
                                    </View>

                                </View>
                            )}
                        </Formik>

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
    },
    error: {
        color: 'crimson',
        fontSize: 15
    }

})


