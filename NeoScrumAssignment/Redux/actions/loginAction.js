import { LOGIN_REQUEST, LOGIN_SUCCESS , LOGIN_FALIURE} from '../actions/types';
import { axios } from 'axios';

export const loginRequest = ()=>{
    return{
        type:LOGIN_REQUEST
    }
}

export const loginSuccess = (users) =>{
    return{
        type:LOGIN_SUCCESS,
        data: users
    }
}
export const loginFaliure = (error) =>{
    return{
        type:LOGIN_FALIURE,
        data: error
    }
}

export const login =(data) =>{
    return (dispatch) =>{
        dispatch(loginRequest())
        axios.post('',{
            user_email: data.user_email,
            user_pass:data.user_pass
        })
        .then(res => {
            const users = res.data
            dispatch(loginSuccess(users))
        })
        .catch(err=>{
            dispatch(loginFaliure(err.message))
        })
    }
}