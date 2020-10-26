import { LOGIN_REQUEST, LOGIN_SUCCESS , LOGIN_FALIURE,SIGN_OUT} from '../actions/types';

const initialState ={
    loading:false,
    user:{
        // "user_id": 393,
        // "user_name": "DevashreePatole",
        // "user_email": "devashree.patole@neosoftmail.com",
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
        case SIGN_OUT:{
            return{
                ...state,
                loading: false,
                user:{},
                error:''
            }
        }
        default: return state
    }
}

export default userReducer