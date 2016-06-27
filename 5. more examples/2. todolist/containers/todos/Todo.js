import React, {Component, PropTypes } from 'react'
import { toggleTodo } from '../../redux/actions/todos'
import { connect } from 'react-redux'

const Todo = ({id, toggleTodo, completed, text}) =>  (
  <li
    onClick={ () => toggleTodo(id) }
    style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}
  >
    {text}
  </li>
)

Todo.propTypes = {
  toggleTodo: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default connect(
  null,  
  {
    toggleTodo
  }
)(Todo)