import counter from './counter'
import images from './images'
import sum from './sum'
import { combineReducers } from 'redux'

export default combineReducers({
    count:counter,
    sum,
    images
})