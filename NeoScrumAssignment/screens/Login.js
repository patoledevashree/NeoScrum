import React, { Component, useState } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    TouchableWithoutFeedback,
    Keyboard,
    TouchableOpacity,
    Button,
    AsyncStorage
} from 'react-native';
import { globalStyles } from '../styles/styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Card from './Card';
import { useNavigation } from '@react-navigation/native';
import { connect } from 'react-redux';
import { login } from '../Redux/actions/loginAction';
import { Formik } from 'formik';
import * as yup from 'yup';
import { ScrollView } from 'react-native-gesture-handler';


const validationSchema = yup.object({
    email: yup
        .string()
        .required()
        .email(),
    password: yup
        .string()
        .required()
        .min(4)
})
/**
 * @author Devashree Patole
 * @description This is the Login Screen into which the user has to login 
 *              with the email and Password.
 * @param {object} userData Information about user
 * @param {function} login Function to call Api
 * @returns JSX of Login screen
 */
function Login({ userData, login }) {

    const [eyeStyle, seteyeStyle] = useState('eye-slash');
    const [displayPassword, setPassword] = useState(true);
    const navigation = useNavigation();


    const handleClick = () => {
        console.log('Icon Clicked')
        setPassword(!displayPassword);
        if (eyeStyle === 'eye-slash') {
            seteyeStyle('eye')
        }
        else {
            seteyeStyle('eye-slash')
        }
    }
    return (
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss();
        }}>
            
                <View style={globalStyles.conatiner}>
                    <Text style={styles.text}>Neo<Text style={{ color: 'red' }}>SCRUM</Text></Text>
                    <Card>
                        <ScrollView>
                        <Text style={globalStyles.textHeader}>Login</Text>
                        <Formik
                            initialValues={{ email: '', password: '' }}
                            validationSchema={validationSchema}
                            onSubmit={(values) => {
                                const data = values
                                console.log(data)
                                login(data);
                               
                            }}
                        >
                            {(props) => (
                                <View>
                                    <View>
                                        <Text style={{ fontSize: 18, marginBottom: 0 }}>Email</Text>
                                        <TextInput style={globalStyles.textInput}
                                            keyboardType='email-address'
                                            onChangeText={props.handleChange('email')}
                                            value={props.values.email}
                                            onBlur={props.handleBlur('email')}
                                        />
                                        <Text style={styles.error}>
                                            {props.touched.email && props.errors.email}
                                        </Text>
                                    </View>
                                    <View>
                                        <Text style={{ fontSize: 18, marginBottom: 0 }}>Password</Text>
                                        <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>

                                            <FontAwesome style={styles.icon}
                                                name={eyeStyle} size={20} color='#05375a'
                                                onPress={() => handleClick()}
                                            ></FontAwesome>

                                        </View>
                                        <TextInput style={globalStyles.textInput}
                                            secureTextEntry={displayPassword}
                                            onChangeText={props.handleChange('password')}
                                            value={props.values.password}
                                            onBlur={props.handleBlur('password')}
                                        />
                                        <Text style={styles.error}>
                                            {props.touched.password && props.errors.password}
                                        </Text>
                                    </View>
                                    <View style={styles.buttons}>
                                        <View style={{ width: 100, borderRadius: 4, marginTop: 10 }}>
                                            <Button title='Login' color='blue'
                                                onPress={props.handleSubmit}
                                                disabled={!props.values.email.length > 0 || !props.values.password.length > 0} />
                                        </View>
                                        <TouchableOpacity onPress={() => { navigation.navigate('Register') }}>
                                            <Text style={styles.underLineText}>Register Here</Text>
                                        </TouchableOpacity>
                                    </View>
                                    <TouchableOpacity onPress={() => { navigation.navigate('ForgetPassword') }}>
                                        <Text style={styles.underLineText}>Forget Password?</Text>
                                    </TouchableOpacity>
                                </View>
                            )}

                        </Formik>
                        </ScrollView>
                    </Card>
                </View>
           
        </TouchableWithoutFeedback>
    )

}

const mapStateToProps = state => {
    return {
        userData: state.userReducer.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
        login: (data) => dispatch(login(data))
    }
}

const styles = StyleSheet.create({
    text: {
        fontSize: 40,
        fontWeight: 'bold',
        paddingBottom: 50,
        textAlign: 'center'
    },
    icon: {

        position: 'absolute',
        right: 25,
        top: 20,
        zIndex: 1

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
    },
    error: {
        color: 'crimson',
        fontSize: 15
    }

})

export default connect(mapStateToProps, mapDispatchToProps)(Login)

