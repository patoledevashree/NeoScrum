import { GET_DASHBOARD ,GET_FEEDBACK} from './types';
import axios from 'axios';

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

export const getDashboard =(id) =>{
    return (dispatch) =>{
        axios.get('')
        .then(res=>{
            const feedback = res.data
            dispatch(dashboardRequest(feedback));
        })
        .catch(err=>{
            const errMsg= err.message
        })
    }
}

export const getFeedback = (id) => {
    return(dispatch) =>{
        axios.get('')
        .then(res=>{
            const feedback = res.data
            dispatch(feedbackRequest(feedback));
        })
        .catch(err=>{
            const errMsg= err.message
        })
    }
}

