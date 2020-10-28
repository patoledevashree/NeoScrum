import { GET_DASHBOARD ,GET_FEEDBACK, ADD_FEEDBACK} from './types';
import axios from 'axios';
import userReducer from '../reducers/userReducer';

export const dashboardRequest =(feedback) =>{
    return{
        type: GET_DASHBOARD,
        data: feedback
    }
}

export const feedbackRequest =(feedback) =>{
    return{
        type: GET_FEEDBACK,
        data: feedback
    }
}

export const addfeddback =(feedback)=>{
    return{
        type: ADD_FEEDBACK,
        data:feedback
    }
}

export const getDashboard =(user) =>{
    return (dispatch) =>{
        const token = user.token;
        axios.get('http://180.149.241.208:3047/feedback',{headers:{'Authorization':token}})
        .then(res=>{
            const feedback = res.data
            console.log(res)
            dispatch(dashboardRequest(feedback));
        })
        .catch(err=>{
            const errMsg= err.message
        })
    }
}

export const getFeedback = (user) => {
    return(dispatch) =>{
        const token = user.token;
        axios.get('http://180.149.241.208:3047/dashboard',{headers:{'Authorization':token}})
        .then(res=>{
            const feedback = res.data
            dispatch(feedbackRequest(feedback));
        })
        .catch(err=>{
            const errMsg= err.message
        })
    }
}

export const addFeedback = (user,values,id) =>{
    return(dispatch)=>{
        const token = user.token;
        axios.post('http://180.149.241.208:3047/addfeedback',{
            receiver_id: id,
            feedback_data: values.text
        },{headers:{'Authorization':token}})
        .then(res=>{
            dispatch(getFeedback(user))
        })
        .catch(err=>{

        })
    }
}

