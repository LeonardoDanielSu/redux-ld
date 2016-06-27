import React, { Component } from 'react'
class Counter extends Component{
  constructor(props) {
    super(props)
  }
  render() {
    const {count:{result},onDecrement} = this.props;
    return (
      <div>
        Clicked: <span>{result}</span> times
        <button onClick={onDecrement}>Decrease</button>
        <p/>
      </div>
    )
  }
}

import { connect } from 'react-redux'
import { decrease } from '../redux/actions/index'

// const mapStateToProps = (state, ownProps) => ({count: state.count})

// const mapDispatchToProps = (dispatch, ownProps) => {
//   return {
//     onDecrement: () => dispatch(decrease())    
//   }
// }

// a container is a kind of component transfering state and dispatch 
// from Redux into its child Component. 
// For example: CounterContainer is a container, Counter is a child component
const CounterContainer = connect(
  (state, ownProps) => ({
    count: state.count,
    prop2: state.prop // just an example in case of many properties
  }),
  {
    onDecrement: decrease,
    func2: () => {} // just an example in case you need many functions from dispatch
  }
)(Counter)

export default CounterContainer