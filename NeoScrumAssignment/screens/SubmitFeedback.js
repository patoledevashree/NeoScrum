import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Button, TextInput, ImageBackground, ScrollView } from 'react-native';
import Card from './Card';
import { Avatar } from 'react-native-elements';
import { Formik } from 'formik';
import * as yup from 'yup';
import { connect } from 'react-redux';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {getFeedback} from '../Redux/actions/Actioncreator';


const feedbackSchema = yup.object({
    text: yup.string().required().min(5)
})

/**
 * @author Devashree Patole
 * @description This screen provides the user the list of
 *               employees whome they have to give feed back.With the help of
 *              API the list is provided.
 * @param {object} feedback List of the Feedback
 * @param {object} user Detail of Loggedin user
 * @param {function} getFeedback Function to get the receiver feedback
 * @param {function} addFeedback Function to add Feedback
 * @returns JSX of the AddFeedback page
 */
function Submitfeedback({ feedback, user, getFeedback,addFeedback }) {
    // useEffect(()=>{
    //     getFeedback(user);
    // },[])
    const[data,setState]= useState([
        {
            "sender_id": 88,
            "receiver_id": 97,
            "receiver_name": "Shubham Soni",
            "image_path": 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
            "flags": false
        },
        {
            "sender_id": 88,
            "receiver_id": 87,
            "receiver_name": "Shubham Gupta",
            "image_path": 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
            "flags": false
        }
      ])
    return (
        <View style={styles.container}>
            {console.log(feedback)}
            {console.log(user)}
            {data.length > 0 ?
                <ScrollView>
                    {
                        data.map((item) => {
                            return (

                                <Formik
                                    initialValues={{ text: '' }}
                                    validationSchema={feedbackSchema}
                                    onSubmit={(values) => {
                                        console.log(values.text)
                                        addFeedback(user,values,item.receiver_id)
                                    }}
                                >
                                    {(props) => (

                                        <View style={styles.container}>
                                            <View style={styles.card}>
                                                <ImageBackground source={require('../assests/images/backimg.jpg')} style={{ width: '100%' }}>
                                                    <View style={{ alignItems: 'center', marginTop: 20 }}>
                                                        <Avatar
                                                            rounded
                                                            size={100}
                                                            source={{
                                                                uri:
                                                                    item.image_path
                                                            }}

                                                        />
                                                        <Text style={{ fontSize: 20, fontWeight: 'bold', padding: 20 }}>{item.receiver_name}</Text>
                                                    </View>
                                                </ImageBackground>
                                                <View style={styles.cardContent}>
                                                    <View style={{ paddingTop: 20 }}>
                                                        <TextInput style={styles.textInput}

                                                            placeholder='Write Your feedback here'
                                                            onChangeText={props.handleChange('text')}
                                                            value={props.values.text}
                                                        />
                                                    </View>
                                                    <View style={{ flexDirection: 'row', paddingBottom: 20, justifyContent: 'space-between' }}>
                                                        <Text style={{ fontSize: 10 }}>Max 100 Characters</Text>
                                                        <Text style={{ fontSize: 10, textAlign: 'right' }}>{props.values.text.length}/100</Text>
                                                    </View>
                                                    <View style={{ flexDirection: 'row', justifyContent: 'flex-end', width: '100%', }}>
                                                        <View style={{ width: 120, borderRadius: 4, marginTop: 10, height: 70 }}>
                                                            <Button title='Submit' color='blue' onPress={props.handleSubmit} disabled={!props.values.text.length > 0} />
                                                        </View>
                                                    </View>
                                                </View>
                                            </View>
                                        </View>
                                    )}
                                </Formik>

                            )
                        })
                    }
                </ScrollView>
                :
                <View style={{ marginVertical: 60, marginHorizontal: 30 }}>
                    <FontAwesome name='folder' size={100} color={'#e7e7e7'} style={{ paddingLeft: 70 }} />
                    <Text style={{ fontSize: 20 }}>No feedBacks Available!!</Text>
                </View>
            }
        </View>
    )
}

const mapStateToProps = state => {
    return {
        feedback: state.feedbackReducer.feedback,
        user: state.userReducer.user

    }
}

const mapDispatchToProps = dispatch => {
    return {
        getFeedback: (user) => dispatch(getFeedback(user)),
        addFeedback: (user,values,id)=> dispatch(addFeedback(user,values,id))
    }
}


const styles = StyleSheet.create({
    container: {
        marginVertical: 40,
        marginHorizontal: 30
    },
    textInput: {
        borderColor: '#ddd',
        width: 260,
        height: 60,
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

export default connect(mapStateToProps, mapDispatchToProps)(Submitfeedback)
