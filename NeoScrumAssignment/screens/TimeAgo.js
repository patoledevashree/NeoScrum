import React, { Component } from 'react';
import { Text } from 'react-native';
import moment from 'moment';

export default function TimeAgo({time}){
    const  date = moment(time, "YYYYMMDD").fromNow();
    return(
    <Text style={{ fontSize: 10, textAlign:'right', paddingTop: 20,paddingLeft:100 }}>{date}</Text>
    )
}