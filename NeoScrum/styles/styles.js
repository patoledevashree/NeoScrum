import {StyleSheet} from 'react-native';

export const globalStyles = StyleSheet.create({
    conatiner: {
        flex: 1,
       marginHorizontal:50,
       marginVertical:70

    },
    textHeader:{
        fontWeight:'bold',
        fontSize:25,
        paddingBottom:30,
        textAlign:'center'
    },
    textInput:{
        borderBottomColor:'#777',
        borderBottomWidth:1.5,
        width:250,
        marginBottom:5
    }
})