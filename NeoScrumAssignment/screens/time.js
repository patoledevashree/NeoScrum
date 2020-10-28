import React, { Component } from 'react';
import { Text } from 'react-native';
import moment from 'moment';

export default function Time({time}){
    const date = moment(time).format("MMMM D, YYYY");
    return(
    <Text style={{ fontSize: 10, textAlign: 'right', paddingTop: 5 }}> Posted On:{date}</Text>
    )
}