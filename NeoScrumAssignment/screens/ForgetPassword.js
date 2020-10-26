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
    const [data, setEmail] = useState({
        email: '',
        isEmailvalid: true
    })
    const navigation = useNavigation();

    const handleEmail = (val) => {
        const exp = '^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$';
        // console.log(val)
        if (val.match(exp)) {
            setEmail({
                email: val,
                isEmailvalid: true
            });
            // console.log(data)
        }
        else {
            setEmail({
                email: val,
                isEmailvalid: false
            });
        }

    };
    const handleSubmit =() =>{
        navigation.navigate('SetPassword');
    }
    return (
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss();
        }}>
            <View style={globalStyles.conatiner}>
                <Text style={styles.text}>Neo<Text style={{ color: 'red' }}>SCRUM</Text></Text>
                <Card>
                    <Text style={globalStyles.textHeader}>Forget Password ?</Text>
                    <Text style={{ fontSize: 18, marginBottom: 0 }}>Email*</Text>
                    <TextInput style={globalStyles.textInput}
                        keyboardType='email-address'
                        onChangeText={(val) => handleEmail(val)}
                        value={data.email}
                    />
                    {data.isEmailvalid ? null :
                        <View>
                            <Text style={{ color: 'red', fontSize: 12 }}>Invalid Email</Text>
                        </View>

                    }
                    <View style={{padding:20}}>
                        <Button title='Submit' color='blue'
                            onPress={() => { handleSubmit() }}
                            disabled={!data.email.length > 0 || !data.isEmailvalid === true} />
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
})
