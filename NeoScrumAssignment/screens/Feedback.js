import React from 'react';
import {View,Text} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import AddFeedback from './AddFeedback';

export default function Feedback(){
    return(
        <ScrollView>
        <View>
            <AddFeedback name ='Bhavna'/>
            <AddFeedback name ='SukhMeetSingh' />
            <AddFeedback name ='shoppers'/>
        </View>
        </ScrollView>
    )
}