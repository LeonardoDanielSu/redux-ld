import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class Examples extends Component {
  func01() {
    console.log("Hello from func01");
    return "function of class"
  }
  render() {
    const func02 = function(){
      console.log("Hello from func02");
      return "function in render()"
    }
    return (
      <div>
        <div>Simple React</div>
        <div style={{color:"red"}}> Hello, world</div>
        <div> { 1 + 1 }</div>
        <div> {this.func01()} </div>
        <div> {func02()} </div>
      </div>
    )
  }
}

ReactDOM.render(
  <Examples/>,
  document.getElementById('root')  
)
