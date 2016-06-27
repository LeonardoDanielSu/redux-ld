import React, { Component } from 'react'
export default class Sum extends Component{
  constructor(props) {
    super(props)
    this.state = {sum: 3, a:1, b: 2}
  }
  render() {
    console.log('Sum.render()');
    return (
      <div>
        <input value={this.state.a} onChange={(e)=>this.setState({a: e.target.value})}/> 
        + <input value={this.state.b} onChange={(e)=>this.setState({b: e.target.value})}/>
        = <span>{this.state.sum}</span>
        <button onClick={() => {
          this.props.sumDesc('click "Sum" button')
          this.setState({sum: Number(this.state.a) + Number(this.state.b)})}}>Sum</button>
        <p/>
      </div>
    )
  }
}