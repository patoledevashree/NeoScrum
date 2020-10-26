import React, { Component, useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableWithoutFeedback, Keyboard, TouchableOpacity ,Button} from 'react-native';
import { globalStyles } from '../styles/styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Card from './Card';
import { useNavigation } from '@react-navigation/native';
import { connect } from 'react-redux';
import {login} from '../Redux/actions/loginAction';

/**
 * @author Devashree Patole
 * @description This is the Login Screen into which the user has to login 
 *              with the email and Password.
 * @returns JSX of Login screen
 */
 function Login({userData,login}) {

    const [data, setState] = useState({
        email: '',
        pwd: '',
        isEmailvalid: true,
        isPwdvalid: true
    })
   const [eyeStyle,seteyeStyle] = useState('eye-slash');
   const [displayPassword, setPassword] = useState(true);
    const navigation = useNavigation();

    const handleEmail = (val) => {
        const exp = '^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$';
        // console.log(val)
        if (val.match(exp)) {
            setState({
                ...data,
                email: val,
                isEmailvalid: true
            });
            // console.log(data)
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
        // console.log(val)
        if (val.trim().length >= 4) {
            setState({
                ...data,
                pwd: val,
                isPwdvalid: true
            });
            // console.log(data)
        }
        else {
            setState({
                ...data,
                pwd: val,
                isPwdvalid: false
            });
        }

    };
    const handleSubmit =() =>{
        login(data);
    }
    const handleClick = () =>{
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
                    <Text style={globalStyles.textHeader}>Login Page</Text>
                    <Text style={{ fontSize: 18,marginBottom:0 }}>Email</Text>
                    <TextInput style={globalStyles.textInput}
                        keyboardType='email-address'
                        onChangeText={(val) =>  handleEmail(val) }
                        value={data.email}
                    />
                    {data.isEmailvalid ? null :
                        <View>
                            <Text style={{ color: 'red', fontSize: 12 }}>Invalid Email</Text>
                        </View>

                    }
                    <Text style={{ fontSize: 18 ,marginBottom:0}}>Password</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                        <FontAwesome style={styles.icon}
                         name={eyeStyle} size={20} color='#05375a'
                         onPress={()=>handleClick}
                         ></FontAwesome>
                    </View>
                    <TextInput style={globalStyles.textInput}
                        secureTextEntry={displayPassword}
                        onChangeText={(val) => handlePassword(val) }
                        value={data.pwd}
                    />
                    {data.isPwdvalid ? null :
                        <View>
                            <Text style={{ color: 'red', fontSize: 12 }}>Invalid Password</Text>
                        </View>

                    }
                    <View style={styles.buttons}>
                        <View style={{ width: 100, borderRadius: 4, marginTop:10}}>
                            <Button title='Login' color='blue'
                             onPress={() => { handleSubmit()}}
                             disabled={!data.email.length > 0 || !data.pwd.length > 0 ||
                              !data.isEmailvalid === true || !data.isPwdvalid ===true} />
                        </View>
                        <TouchableOpacity onPress={() => { navigation.navigate('Register') }}>
                            <Text style={styles.underLineText}>Register Here</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity onPress={() => { navigation.navigate('ForgetPassword') }}>
                            <Text style={styles.underLineText}>Forget Password?</Text>
                        </TouchableOpacity>
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
        
        position:'absolute',
        right:25,
        top:20

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

export default connect(mapStateToProps,mapDispatchToProps)(Login)

