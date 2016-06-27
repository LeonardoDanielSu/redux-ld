import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class Examples extends Component {
  constructor(props) {
    super(props)
    this.state = {count: 0, sum: 3, a:1, b: 2}
    this.decrease = this.decrease.bind(this);
  }
  decrease() {
    this.setState({count: this.state.count - 1});
  }
  render() {
    console.log('Examples.render()');
    return (
      <div>
        <h1>React</h1>
        Clicked: <span>{this.state.count}</span> times
        <button onClick={this.decrease}>Decrease</button>
        <p/>
        <input value={this.state.a} onChange={(e)=>this.setState({a: e.target.value})}/> 
        + <input value={this.state.b} onChange={(e)=>this.setState({b: e.target.value})}/>
        = <span>{this.state.sum}</span>
        <button onClick={() => this.setState({sum: Number(this.state.a) + Number(this.state.b)})}>Sum</button>
        <p/>
      </div>
    )
  }
}

ReactDOM.render(
  <Examples/>,
  document.getElementById('root')  
)
