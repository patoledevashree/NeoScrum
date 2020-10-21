import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

export default function FlatButton({ text, onPress }) {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.button}>
                <Text style={styles.buttonText}>{text}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button:{
        borderRadius:4,
        width:100,
        alignContent:'flex-start',
        backgroundColor:'blue',
       marginBottom:20,
       marginTop:5
    },
    buttonText:{
        color:'white',
        textAlign:'center',
        padding:10,
        fontSize:20

    }
})