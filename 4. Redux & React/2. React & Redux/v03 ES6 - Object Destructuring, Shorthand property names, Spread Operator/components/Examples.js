import React, { Component } from 'react'
import Counter2, {a as a2, b} from './Counter'
import Sum from './Sum'
import RandomImages from './RandomImages'

export default class Examples extends Component {
  constructor(props) {
    super(props) 
  }
  render() {
    const {value:{count,sum, images}, 
        onDecrement, 
        onSum, 
        onRandomImages} = this.props;
    return (
      <div>
        <h1>React</h1>
        <Counter2 count={count} 
            onDecrement={onDecrement}/>
        <Sum sum={sum} 
            onSum={onSum}/>
        <RandomImages images={images} 
            onRandomImages={onRandomImages}/>
      </div>
    )
  }
}