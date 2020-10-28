import React, { useState } from 'react';
import {
    View,
    Text,
    TouchableWithoutFeedback,
    Keyboard,
    StyleSheet,
    TextInput,
    Button
} from 'react-native';
import { globalStyles } from '../styles/styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import Card from './Card';
import { useNavigation } from '@react-navigation/native';
import { Formik } from 'formik';
import * as yup from 'yup';
import { ScrollView } from 'react-native-gesture-handler';

const validationSchema = yup.object({
    otp: yup
        .string()
        .required()
        .min(4),
    password: yup
        .string()
        .required()
        .min(4),
    confirmpwd: yup
        .string()
        .required()
        .oneOf(
            [yup.ref('password'), null],
            'Passwords must match',
        ),
})

/**
 * @author Devashtree Patole
 * @description This screen is for set password . 
 *              Here the user has to enter the OTP and new Password.
 * @returns JSX of the screen
 */
export default function ForgetPassword() {
    const navigation = useNavigation();

    const [securePwd, setPassword] = useState(true);
    const [secureCrfm, setCfrmPwd] = useState(true);
    const [pwd_eyeStyle, setPwdIcon] = useState('eye-slash');
    const [crf_eyeStyle, setCrfmIcon] = useState('eye-slash');

    const handlePwdClick = () => {

        setPassword(!securePwd);
        if (pwd_eyeStyle === 'eye-slash') {
            setPwdIcon('eye')
        }
        else {
            setPwdIcon('eye-slash')
        }
    }

    const handleClick = () => {

        setCfrmPwd(!secureCrfm);
        if (crf_eyeStyle === 'eye-slash') {
            setCrfmIcon('eye')
        }
        else {
            setCrfmIcon('eye-slash')
        }
    }

    return (
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss();
        }}>
            <View>
                <View style={styles.header}>
                    <FontAwesome name='arrow-left' size={25} style={{ padding: 20 }}
                        onPress={() => { navigation.goBack() }}
                    />
                    <Text style={{ fontSize: 18, padding: 20 }}>Set Password</Text>
                </View>
                <ScrollView>
                    <View style={globalStyles.conatiner}>
                        <Text style={styles.text}>Neo<Text style={{ color: 'red' }}>SCRUM</Text></Text>
                        <Card>
                            <Formik
                                initialValues={{
                                    otp: '',
                                    password: '',
                                    confirmpwd: ''
                                }}
                                validationSchema={validationSchema}
                                onSubmit={(values) => {
                                    console.log(values)
                                }}
                            >
                                {(props) => (
                                    <View>
                                        <Text style={globalStyles.textHeader}>Set Password ?</Text>
                                        <View>
                                            <Text style={{ fontSize: 18, marginBottom: 0 }}>Enter OTP*</Text>
                                            <TextInput style={globalStyles.textInput}
                                                keyboardType='numeric'
                                                onChangeText={props.handleChange('otp')}
                                                value={props.values.otp}
                                                onBlur={props.handleBlur('otp')}
                                            />
                                            <Text style={styles.error}>
                                                {props.touched.otp && props.errors.otp}
                                            </Text>
                                        </View>
                                        <View>
                                            <Text style={{ fontSize: 18, marginBottom: 0 }}>New Password*</Text>
                                            <View style={{ flexDirection: 'row' }}>
                                                <TextInput style={globalStyles.textInput}
                                                    secureTextEntry={securePwd}
                                                    onChangeText={props.handleChange('password')}
                                                    value={props.values.password}
                                                    onBlur={props.handleBlur('password')}
                                                />
                                                <FontAwesome style={styles.icon}
                                                    name={pwd_eyeStyle} size={20} color='#05375a'
                                                    onPress={handlePwdClick}
                                                ></FontAwesome>
                                            </View>
                                            <Text style={styles.error}>
                                                {props.touched.password && props.errors.password}
                                            </Text>
                                        </View>
                                        <View>
                                            <Text style={{ fontSize: 18, marginBottom: 0 }}>Confirm Password*</Text>
                                            <View style={{ flexDirection: 'row' }}>
                                                <TextInput style={globalStyles.textInput}
                                                    secureTextEntry={secureCrfm}
                                                    onChangeText={props.handleChange('confirmpwd')}
                                                    value={props.values.confirmpwd}
                                                    onBlur={props.handleBlur('confirmpwd')}
                                                />
                                                <FontAwesome style={styles.icon}
                                                    name={crf_eyeStyle} size={20} color='#05375a'
                                                    onPress={handleClick}
                                                ></FontAwesome>
                                            </View>
                                            <Text style={styles.error}>
                                                {props.touched.confirmpwd && props.errors.confirmpwd}
                                            </Text>
                                        </View>
                                        <View style={{ padding: 20 }}>
                                            <Button title='Submit' color='blue'
                                                onPress={props.handleSubmit}
                                                disabled={!props.values.otp.length > 0 || !props.values.confirmpwd.length > 4
                                                    || !props.values.password.length > 4
                                                } />
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
    icon: {
        position: 'relative',
        right: 35
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
