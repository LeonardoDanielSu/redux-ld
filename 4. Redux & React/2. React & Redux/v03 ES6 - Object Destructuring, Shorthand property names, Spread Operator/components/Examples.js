import React, { Component } from 'react'
import Counter2, {a as a2, b} from './Counter'
import Sum from './Sum'
import RandomImages from './RandomImages'

export default class Examples extends Component {
  constructor(props) {
    super(props) 
  }
  render() {
    return (
      <div>
        <h1>React</h1>
        <Counter2 count={this.props.value.count} 
            onDecrement={this.props.onDerement}/>
        <Sum sum={this.props.value.sum} 
            onSum={this.props.onSum}/>
        <RandomImages images={this.props.value.images} 
            onRandomImages={this.props.onRandomImages}/>
      </div>
    )
  }
}