
import FeedbackReducer from './reducers/FeedbackReducer';
import { createStore,applyMiddleware ,combineReducers} from 'redux';
import thunk from 'redux-thunk'
import  UserReducer  from "./reducers/userReducer";


const rootReducer = combineReducers({
    feedbackReducer:FeedbackReducer,
    userReducer:UserReducer
})

const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
)

export default store