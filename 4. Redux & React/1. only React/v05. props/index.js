import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Counter2, {a as a2, b} from './components/Counter'
import Sum from './components/Sum'

console.log(a2);
console.log(b);

class Examples extends Component {
  constructor(props) {
    super(props)    
    
  }

  render() {
    console.log('Examples.render()');
    return (
      <div>
        <h1>React</h1>
        <Counter2/>
        <Sum/>
      </div>
    )
  }
}

ReactDOM.render(
  <Examples/>,
  document.getElementById('root')  
)
