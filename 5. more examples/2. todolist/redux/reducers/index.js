import counter from './examples01/counter'
import images from './examples01/images'
import sum from './examples01/sum'

import todosList from './todos/todosList'
import todosFilter from './todos/todosFilter'

import { combineReducers } from 'redux'
import {routerReducer } from 'react-router-redux'

export default combineReducers({
    examples: combineReducers({
        count:counter,
        sum,
        images
    }),
    todos: combineReducers({
        todosList,
        todosFilter
    }),
    // youtube: combineReducers({
    // }),
    routing: routerReducer
})