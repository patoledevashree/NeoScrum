import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, FlatList, ScrollView } from 'react-native';
import Card from './Card';
import { connect } from 'react-redux';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import {getDashboard} from '../Redux/actions/Actioncreator';

/**
 * 
 * @author Devashree Patole
 * @description This is the dashboard page it contains all the feedback
 *              that are given to the userPropTypes.
 * @returns JSX of Dashboard
 */
function Dashboard({ dashboard,user, getDashboard }) {
    useEffect(()=>{
        getDashboard(user)
    },[])

    return (

        <View style={styles.container}>
            {dashboard.length > 0 ?
                <FlatList
                    data={dashboard}
                    renderItem={({ item }) => (
                        <View>
                            <Card>
                                <Text style={styles.textHead}>FeedBack</Text>
                                <Text style={{ padding: 20 }}>{item.feedback_data}</Text>
                                <Text style={{ fontSize: 10, textAlign: 'right', paddingTop: 20 }}> Posted By :Devashree</Text>
                                <Text style={{ fontSize: 10, textAlign: 'right', paddingTop: 5 }}>Posted On: {item.posting_date}</Text>
                            </Card>
                        </View>

                    )}
                /> :
                <View style={{marginVertical:60,marginHorizontal:30}}>
                    <FontAwesome name='folder' size={100} color={'#e7e7e7'} style={{paddingLeft:70}}/>
                    <Text style={{fontSize:20}}>No feedBacks Available!!</Text>
                </View>}

        </View>

    );
}
const mapStateToProps = state => {
    return {
        dashboard: state.feedbackReducer.dashboard,
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
        backgroundColor: 'skyblue',
        padding: 20,
        marginVertical: 10,
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)