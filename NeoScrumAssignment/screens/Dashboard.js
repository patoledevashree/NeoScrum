import React, { useState } from 'react';
import {StyleSheet, View, Text, FlatList,ScrollView } from 'react-native';
import Card from './Card';
import { connect } from 'react-redux';
import FeedbackReducer from '../Redux/reducers/FeedbackReducer';



 function Dashboard({dashboard,fetchdata}) {

    // const [feedback, setState] = useState([
    //     {
    //         text: 'Your program is very understandable',
    //         key: '1',
    //         by: 'Steve Jobs',
    //         date: '9th. Aug,2015'
    //     },
    //     {
    //         key: '2',
    //         text: 'Learn a lot from you',
    //         by: 'Steve Jobs',
    //         date: '10th. Aug,2015'
    //     },
    //     {
    //         key: '3',
    //         text: 'Your program is very understandable',
    //         by: 'Steve Jobs',
    //         date: '15th. Aug,2015'
    //     },
    //     {
    //         key: '4',
    //         text: 'Your program is very understandable',
    //         by: 'Steve Jobs',
    //         date: '15th. Aug,2015'
    //     }
    // ])
    return (

        <View style={styles.container}>
           
            <FlatList
                data={dashboard}
                renderItem={({ item }) => (
                    <View>
                        <Card>
                            <Text style={styles.textHead}>FeedBack</Text>
                            <Text>{item.feedback_data}</Text>
                            <Text style={{fontSize:10,textAlign:'right',paddingTop:20}}> Posted By :Devashree</Text>
                            <Text style={{fontSize:10,textAlign:'right',paddingTop:5}}>Posted On: {item.posting_date}</Text>
                        </Card>
                    </View>

                )}
            />
            
        </View>

    );
}
const mapStateToProps = state => {
    return {
        dashboard:state.feedbackReducer.dashboard

    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
      fetchdata: (id) => dispatch(getDashboard(id))
    }
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

export default connect(mapStateToProps,mapDispatchToProps)(Dashboard)