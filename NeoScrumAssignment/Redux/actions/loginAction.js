import { LOGIN_REQUEST, LOGIN_SUCCESS , LOGIN_FALIURE,STORE_DATA} from '../actions/types';
import  axios  from 'axios';
import Toast from 'react-native-simple-toast';
import  AsyncStorage  from '@react-native-community/async-storage'


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
export const storeData =(user) =>{
    return{
        type:STORE_DATA,
        data:user
    }
}

export const login =(data) =>{
    return (dispatch) =>{
        console.log('Login APi')
        dispatch(loginRequest())
        axios.post('http://180.149.241.208:3047/login',{
            user_email: data.email,
            user_pass:data.password
        })
        .then(res => {
            const users = res.data
            console.log(users)
            Toast.show(users.message,Toast.LONG);
            dispatch(loginSuccess(users))
            setData(users)
        })
        .catch(err=>{
            console.log(err)
            Toast.show('Incorrect Email or Password');
            dispatch(loginFaliure(err.message))
        })
    }
}

export const restoreData =(user) =>{
    return(dispatch) =>{
        dispatch(storeData(user))
    }
}

export const setData = async (user)=>{
    console.log('setData')
    await AsyncStorage.setItem('user',JSON.stringify(user));
}