import React, { Component } from 'react'
export default class Sum extends Component{
  constructor(props) {
    super(props)
    this.state = {a:1, b: 2}
  }
  render() {
    const {state:{a,b}, props:{sum, onSum}} = this;
    return (
      <div>
        <input value={a} 
            onChange={(e)=>this.setState({a: e.target.value})}/> 
        + <input value={b} 
            onChange={(e)=>this.setState({b: e.target.value})}/>
        = <span>{sum}</span>
        <button onClick={() => onSum(a,b)}> Sum</button>
        <p/>
      </div>
    )
  }
}