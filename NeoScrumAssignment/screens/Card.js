import React from 'react';
import {View,Text,StyleSheet} from 'react-native';


/**
 * @author Devashree Patole
 * @description This file contains a reusable card.Which can be used when a card is called. 
 * @param {object} props View which is to be displayed inside the card.
 * @returns JSX of card
 */
export default function Card(props){
    return(
        <View style={styles.card}>
            <View style={styles.cardContent}>
                {props.children}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card:{
        borderRadius:6,
        elevation:3,
        backgroundColor:'#fff',
        shadowOffset:{width:1,height:1},
        shadowColor:'#333',
        shadowOpacity:0.3,
        shadowRadius:2,
        marginHorizontal:4,
        marginVertical:6,
        marginBottom:10
    },
    cardContent:{
        marginVertical:15,
        marginHorizontal:18
    }
})