import React, { useState } from 'react';
import {
    View,
    Text,
    TouchableWithoutFeedback,
    Keyboard,
    StyleSheet,
    TextInput,
    Button,
    ScrollView
} from 'react-native';
import { globalStyles } from '../styles/styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import Card from './Card';
import { useNavigation } from '@react-navigation/native';
import { Formik } from 'formik';
import * as yup from 'yup';


const validationSchema = yup.object({
    email: yup
        .string()
        .required()
        .email()
})

/**
 * @author Devashtree Patole
 * @description This screen is for forget password . 
 *              Here the user has to enter the email to generate an otp.
 * @returns JSX of the screen
 */
export default function ForgetPassword() {
    const navigation = useNavigation();

    return (
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss();
        }}>
            <View>
                <View style={styles.header}>
                    <FontAwesome name='arrow-left' size={25} style={{padding:20}}
                    onPress={()=>{navigation.goBack()}}
                    />
                    <Text style={{fontSize:18,padding:20}}>ForgetPassword</Text>
                </View>
                <ScrollView>
                    <View style={globalStyles.conatiner}>
                        <Text style={styles.text}>Neo<Text style={{ color: 'red' }}>SCRUM</Text></Text>
                        <Card>
                            <Formik
                                initialValues={{ email: '' }}
                                validationSchema={validationSchema}
                                onSubmit={(values) => {
                                    navigation.navigate('SetPassword')
                                }}
                            >
                                {(props) => (
                                    <View>
                                        <Text style={globalStyles.textHeader}>Forget Password ?</Text>
                                        <Text style={{ fontSize: 18, marginBottom: 0 }}>Email*</Text>
                                        <TextInput style={globalStyles.textInput}
                                            keyboardType='email-address'
                                            onChangeText={props.handleChange('email')}
                                            value={props.values.email}
                                            onBlur={props.handleBlur('email')}
                                        />
                                        <Text style={styles.error}>
                                            {props.touched.email && props.errors.email}
                                        </Text>

                                        <View style={{ padding: 20 }}>
                                            <Button title='Submit' color='blue'
                                                onPress={props.handleSubmit}
                                                disabled={!props.values.email.length > 0} />
                                        </View>
                                    </View>
                                )}
                            </Formik>

                        </Card>
                    </View>
                </ScrollView>
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
    error: {
        color: 'crimson',
        fontSize: 15
    },
    header:{
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        borderBottomColor: '#777',
        position: 'relative',
        shadowColor: '#777',
        elevation:5,
        flexDirection:'row'
    }
})
