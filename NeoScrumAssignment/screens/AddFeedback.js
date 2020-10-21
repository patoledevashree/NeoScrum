import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, TextInput, ImageBackground } from 'react-native';
import Card from './Card';
import FlatButton from './FlatButton';
import { Avatar, Accessory } from 'react-native-elements';


export default function AddFeedback({ name, path }) {
    const [state, setState] = useState('')
    return (
        <View style={styles.container}>

            <View style={styles.card}>

                <ImageBackground source={require('../assests/images/backimg.jpg')} style={{ width: '100%' }}>
                    <View style={{ alignItems: 'center', marginTop: 20 }}>
                        <Avatar
                            rounded
                            size={100}
                            source={{
                                uri:
                                    'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                            }}

                        />
                        <Text style={{ fontSize: 20, fontWeight: 'bold', padding: 20 }}>{name}</Text>
                    </View>
                </ImageBackground>
                <View style={styles.cardContent}>
                    <View style={{ paddingTop: 20 }}>
                        <TextInput style={styles.textInput}
                            multiline
                            placeholder='write your feedback here'
                            onChangeText={(val) => { setState(val) }}
                            value={state}
                        />
                    </View>
                    <View style={{ flexDirection: 'row', paddingBottom: 20, justifyContent: 'space-between' }}>
                        <Text style={{ fontSize: 10 }}>Max 100 Characters</Text>
                        <Text style={{ fontSize: 10, textAlign: 'right' }}>{state.length}/100</Text>
                    </View>
                    <Button title='Submit Feedback' />
                </View>
            </View>

        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 40,
        marginHorizontal: 50
    },
    textInput: {
        borderColor: '#ddd',
        width: 270,
        height: 50,
        borderWidth: 1,

    },
    card: {
        borderRadius: 6,
        elevation: 3,
        backgroundColor: '#fff',
        shadowOffset: { width: 1, height: 1 },
        shadowColor: '#333',
        shadowOpacity: 0.3,
        shadowRadius: 2,
        marginHorizontal: 4,
        marginVertical: 6,
        width: '100%'
    },
    cardContent: {
        marginHorizontal: 15,
        marginVertical: 20
    }
})