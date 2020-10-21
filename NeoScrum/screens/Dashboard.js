import React, { useState } from 'react';
import {StyleSheet, View, Text, FlatList } from 'react-native';
import Card from './Card';

export default function Dashboard() {

    const [feedback, setState] = useState([
        {
            text: 'Your program is very understandable',
            key: '1',
            by: 'Steve Jobs',
            date: '9th. Aug,2015'
        },
        {
            key: '2',
            text: 'Learn a lot from you',
            by: 'Steve Jobs',
            date: '10th. Aug,2015'
        },
        {
            key: '3',
            text: 'Your program is very understandable',
            by: 'Steve Jobs',
            date: '15th. Aug,2015'
        },
        {
            key: '4',
            text: 'Your program is very understandable',
            by: 'Steve Jobs',
            date: '15th. Aug,2015'
        }
    ])
    return (

        <View>
            <FlatList
                data={feedback}
                renderItem={({ item }) => (
                    <View style={styles.container}>
                        <Card>
                            <Text style={styles.textHead}>FeedBack</Text>
                            <Text>{item.text}</Text>
                            <Text style={{fontSize:10,textAlign:'right',paddingTop:20}}> Posted By :{item.by}</Text>
                            <Text style={{fontSize:10,textAlign:'right',paddingTop:5}}>Posted On: {item.date}</Text>
                        </Card>
                    </View>

                )}
            />
        </View>

    );
}

const styles= StyleSheet.create({
    container:{
        marginHorizontal:50,
        marginVertical:10
    },
    textHead:{
        backgroundColor:'skyblue',
        padding:20,
        marginVertical:10,
    }
})