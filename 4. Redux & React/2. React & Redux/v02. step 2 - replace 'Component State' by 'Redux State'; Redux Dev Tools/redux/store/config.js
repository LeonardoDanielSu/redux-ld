import { createStore, applyMiddleware } from 'redux'
import combineReducer from '../reducers/index'
import {logger, crashReporter, thunk} from '../middlewares/index'
const store = createStore(combineReducer, 
    applyMiddleware(logger, crashReporter, thunk))
export default store;