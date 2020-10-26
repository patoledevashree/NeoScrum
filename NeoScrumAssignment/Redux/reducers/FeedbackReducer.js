
import { GET_DASHBOARD } from '../actions/types';

const initialState = {
    dashboard: [
        // {
        //     "receiver_id": 87,
        //     "feedback_data": "Great",
        //     "posting_date": "2019-03-29T18:30:00.000Z"
        // },
        // {
        //     "receiver_id": 88,
        //     "feedback_data": "Good Player",
        //     "posting_date": "2019-03-29T18:30:00.000Z"
        // },
        // {
        //     "receiver_id": 89,
        //     "feedback_data": "Hard Working",
        //     "posting_date": "2019-03-29T18:30:00.000Z"
        // },
        // {
        //     "receiver_id": 90,
        //     "feedback_data": "Dedicated",
        //     "posting_date": "2019-03-29T18:30:00.000Z"
        // },

    ],
    feedback: [
        // {
        //     "sender_id": 88,
        //     "receiver_id": 97,
        //     "receiver_name": "Shubham Soni",
        //     "image_path": 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        //     "flags": false
        // },
        // {
        //     "sender_id": 88,
        //     "receiver_id": 87,
        //     "receiver_name": "Shubham Gupta",
        //     "image_path": 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        //     "flags": false
        // }
    ]
}

const FeedbackReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_DASHBOARD': {
            return {
                ...state,
                dashboard: action.data
            }
        }
        case 'GET_FEEDBACK':{
            return {
                ...state,
                feedback:action.data
            }
        }
        default: return state
    }
}

export default FeedbackReducer