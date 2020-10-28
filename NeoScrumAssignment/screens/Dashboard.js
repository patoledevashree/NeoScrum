import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, FlatList, ScrollView } from 'react-native';
import Card from './Card';
import { connect } from 'react-redux';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { getDashboard } from '../Redux/actions/Actioncreator';
import Time from './time'
import TimeAgo from './TimeAgo'


/**
 * 
 * @author Devashree Patole
 * @description This is the dashboard page it contains all the feedback
 *              that are given to the userPropTypes.
 * @param {object} dashboard All the feedbacks provided.
 * @param {object} user Details of loggedin user
 * @returns JSX of Dashboard
 */
function Dashboard({ dashboard, user, getDashboard, feedback }) {
    // useEffect(()=>{
    //     getDashboard(user)
    // },[])
    const [data, setState] = useState([
        {
            "receiver_id": 87,
            "feedback_data": "Great",
            "posting_date": "2020-10-28T09:30:00.000Z"
        },
        {
            "receiver_id": 88,
            "feedback_data": "Good Player",
            "posting_date": "2020-10-27T18:30:00.000Z"
        },
        {
            "receiver_id": 89,
            "feedback_data": "Hard Working",
            "posting_date": "2020-10-27T18:30:00.000Z"
        },
        {
            "receiver_id": 90,
            "feedback_data": "Dedicated",
            "posting_date": "2020-10-27T18:30:00.000Z"
        },
    ])
    return (

        <View style={styles.container}>
            {/* {console.log(feedback)} */}
            {data.length > 0 ?
                <FlatList
                    data={data}
                    renderItem={({ item }) => (
                        <View>

                            <Card>
                                <View style={{ backgroundColor: 'skyblue', flexDirection:'row'}}>
                                    <Text style={styles.textHead}>FeedBack</Text>
                                    <TimeAgo time={item.posting_date}/>
                                </View>
                                <Text style={{ padding: 20 }}>{item.feedback_data}</Text>
                                <Text style={{ fontSize: 10, textAlign: 'right', paddingTop: 20 }}> Posted By :Devashree</Text>
                                <Time time={item.posting_date}></Time>
                            </Card>
                        </View>

                    )}
                /> :
                <View style={{ marginVertical: 60, marginHorizontal: 30 }}>
                    <FontAwesome name='folder' size={100} color={'#e7e7e7'} style={{ paddingLeft: 70 }} />
                    <Text style={{ fontSize: 20 }}>No feedBacks Available!!</Text>
                </View>}

        </View>

    );
}
const mapStateToProps = state => {
    return {
        dashboard: state.feedbackReducer.dashboard,
        feedback: state.feedbackReducer.feedback,
        user: state.userReducer.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getDashboard: (user) => dispatch(getDashboard(user))
    }
}



const styles = StyleSheet.create({
    container: {
        marginHorizontal: 50,
        marginVertical: 10
    },
    textHead: {

        padding: 10,
        marginVertical: 10,
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)