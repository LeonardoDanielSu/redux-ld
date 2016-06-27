import React, { PropTypes } from 'react'
import { setTodoFilter } from '../../redux/actions/todos'
import { connect } from 'react-redux'

const Filter = ({ active, children, onFilter }) => {
  if (active) {
    return <span>{children}</span>
  }

  return (
    <a href="#"
       onClick={e => {
         e.preventDefault()
         onFilter()
       }}
    >
      {children}
    </a>
  )
}

Filter.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onFilter: PropTypes.func.isRequired
}

export default connect(
  (state, ownProps) => {
    return {
      active: state.todos.todosFilter === ownProps.filter
    }
  },
  (dispatch, ownProps) => {
    return {
      onFilter: () => {
        dispatch(setTodoFilter(ownProps.filter))
      }
    }
  }
)(Filter) 
