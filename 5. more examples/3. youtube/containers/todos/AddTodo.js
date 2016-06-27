import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../../redux/actions/todos'
class AddTodo extends Component {
  constructor(props) {
    super(props)
    this.state = {todo: ""};
  }
  render() {
    const {state: {todo}} = this;
    const  onAddTodo = (e) =>  {
      e.preventDefault()
      if (!todo.trim()) {
        return
      }
      this.props.addTodo(todo);
      this.setState({todo: ''})
    }
    return (
      <div>
        <form onSubmit= { onAddTodo }>
          <input value={todo} 
              onChange={(e)=>this.setState({todo: e.target.value})}/>      
          <button type="submit">
            Add Todo
          </button>
        </form>
      </div>
    )
  }
}

export default connect(null,{
  addTodo
})(AddTodo)
