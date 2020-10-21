
import FeedbackReducer from './reducers/FeedbackReducer';
import { createStore,applyMiddleware ,combineReducers} from 'redux';
import thunk from 'redux-thunk'


const rootReducer = combineReducers({
    feedbackReducer:FeedbackReducer
})

const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
)

export default store