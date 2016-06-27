import React, { Component } from 'react'
import { connect } from 'react-redux'
import { decrease } from '../../redux/actions/index'
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

export default connect(
  (state, ownProps) => ({
    count: state.examples.count,
    prop2: state.prop // just an example in case of many properties
  }),
  {
    onDecrement: decrease,
    func2: () => {} // just an example in case you need many functions from dispatch
  }
)(Counter)