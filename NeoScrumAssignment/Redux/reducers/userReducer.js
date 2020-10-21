import { LOGIN_REQUEST, LOGIN_SUCCESS , LOGIN_FALIURE} from '../actions/types';

const initialState ={
    loading:false,
    user:{
        user_email:'shubham.gupta@neosofttech.com',
        user_pass:'Dove@123'
    },
    error:''
}

const userReducer =(state = initialState,action)=>{
    switch(action.type){
        case LOGIN_REQUEST:{
            return{
                ...state,
                loading:true
            }
        }
        case LOGIN_SUCCESS:{
            return{
                ...state,
                loading: false,
                user:action.data,
                error:''
            }
        }
        case LOGIN_FALIURE:{
            return{
                ...state,
                loading:false,
                user:[],
                error:action.data
            }
        }
        default: return state
    }
}

export default userReducer