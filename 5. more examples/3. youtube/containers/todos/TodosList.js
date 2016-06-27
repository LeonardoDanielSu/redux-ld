import React, {Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Todo from './Todo'
class TodoList extends Component {
  render() {
    return (
      <ul>
        {this.props.todos.map(todo =>
          <Todo
            key={todo.id}
            {...todo}
          />
        )}
      </ul>
    )
  }
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired
}

export default  connect(
  (state) => {
      const { todosList, todosFilter } = state.todos;
      switch (todosFilter) {
        case 'SHOW_ALL':
          return { todos: todosList }
        case 'SHOW_COMPLETED':
          return { todos: todosList.filter(todo => todo.completed) }
        case 'SHOW_ACTIVE':
          return { todos: todosList.filter(todo => !todo.completed) }
        default:
          return console.error('unexpected "todosFilter" : ', todosFilter)
      }
  },
  null
)(TodoList)



