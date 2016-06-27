import React, { Component } from 'react'
export default class Counter extends Component{
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        Clicked: <span>{this.props.count.result}</span> times
        <button onClick={this.props.onDecrement}>Decrease</button>
        <p/>
      </div>
    )
  }
}

export const a = 'A';
export const b = {b:'B'};