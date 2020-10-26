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
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Card from './Card';
import { useNavigation } from '@react-navigation/native';


export default function ForgetPassword() {
    const [data, setState] = useState({
        otp: '',
        password: '',
        confirmpwd: '',
        isPwdvalid: true,
        isconfirmpwdValid: true,
        isOtpvalid: true
    })
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

    const handlePassword = (val) => {
        // console.log(val)
        if (val.trim().length >= 4) {
            setState({
                ...data,
                password: val,
                isPwdvalid: true
            });
            // console.log(data)
        }
        else {
            setState({
                ...data,
                password: val,
                isPwdvalid: false
            });
        }

    };

    const handleConfirmPwd = (val) => {
        // console.log(val)
        if (val.trim().length >= 4) {
            setState({
                ...data,
                confirmpwd: val,
                isconfirmpwdValid: true
            });
            // console.log(data)
        }
        else {
            setState({
                ...data,
                confirmpwd: val,
                isconfirmpwdValid: false
            });
        }

    };

    const handleOtp = (val) => {
        // console.log(val)
        if (val.trim().length != 0) {
            setState({
                ...data,
                otp: val,
                isOtpvalid: true
            });
            // console.log(data)
        }
        else {
            setState({
                ...data,
                otp: val,
                isOtpvalid: false
            });
        }

    };


    const handleSubmit = () => {
        navigation.navigate('Login');
    }
    return (
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss();
        }}>
            <View style={globalStyles.conatiner}>
                <Text style={styles.text}>Neo<Text style={{ color: 'red' }}>SCRUM</Text></Text>
                <Card>
                    <Text style={globalStyles.textHeader}>Set Password ?</Text>
                    <Text style={{ fontSize: 18, marginBottom: 0 }}>Enter OTP*</Text>
                    <TextInput style={globalStyles.textInput}
                        keyboardType='numeric'
                        onChangeText={(val) => handleOtp(val)}
                        value={data.otp}
                    />
                    {data.isOtpvalid ? null :
                        <View>
                            <Text style={{ color: 'red', fontSize: 12 }}>Enter Otp</Text>
                        </View>

                    }

                    <Text style={{ fontSize: 18, marginBottom: 0 }}>New Password*</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <TextInput style={globalStyles.textInput}
                            secureTextEntry={securePwd}
                            onChangeText={(val) => handlePassword(val)}
                            value={data.password}
                        />
                        <FontAwesome style={styles.icon}
                            name={pwd_eyeStyle} size={20} color='#05375a'
                            onPress={handlePwdClick}
                        ></FontAwesome>
                    </View>
                    {data.isPwdvalid ? null :
                        <View>
                            <Text style={{ color: 'red', fontSize: 12 }}>Enter Password</Text>
                        </View>

                    }
                    <Text style={{ fontSize: 18, marginBottom: 0 }}>Confirm Password*</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <TextInput style={globalStyles.textInput}
                            secureTextEntry={secureCrfm}
                            onChangeText={(val) => handleConfirmPwd(val)}
                            value={data.confirmpwd}
                        />
                        <FontAwesome style={styles.icon}
                            name={crf_eyeStyle} size={20} color='#05375a'
                            onPress={handleClick}
                        ></FontAwesome>
                    </View>
                    {data.isconfirmpwdValid ? null :
                        <View>
                            <Text style={{ color: 'red', fontSize: 12 }}>Enter password again</Text>
                        </View>

                    }
                    <View style={{ padding: 20 }}>
                        <Button title='Submit' color='blue'
                            onPress={() => { handleSubmit() }}
                            disabled={!data.isOtpvalid === true|| !data.otp.length > 0
                                || !data.isconfirmpwdValid === true || !data.confirmpwd.length >= 4
                                || !data.isPwdvalid === true || !data.password.length >= 4
                                } />
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
        position: 'relative',
        right: 35
    }
})
