import React, { Component } from 'react'
export default class Counter extends Component{
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

export const a = 'A';
export const b = {b:'B'};