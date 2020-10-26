import { LOGIN_REQUEST, LOGIN_SUCCESS , LOGIN_FALIURE} from '../actions/types';
import  axios  from 'axios';
import Toast from 'react-native-simple-toast';

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
        console.log('Login APi')
        dispatch(loginRequest())
        axios.post('http://180.149.241.208:3047/login',{
            user_email: data.email,
            user_pass:data.pwd
        })
        .then(res => {
            const users = res.data
            console.log(users)
            Toast.show(users.message,Toast.LONG);
            dispatch(loginSuccess(users))
        })
        .catch(err=>{
            console.log(err)
            Toast.show('Something Went wrong');
            dispatch(loginFaliure(err.message))
        })
    }
}