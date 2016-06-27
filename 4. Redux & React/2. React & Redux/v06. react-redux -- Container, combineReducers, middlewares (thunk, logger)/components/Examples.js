import React, { Component } from 'react'
import Counter from '../containers/Counter'
import Sum from '../containers/Sum'
import RandomImages from '../containers/RandomImages'

export default class Examples extends Component {
  constructor(props) {
    super(props) 
  }
  render() {
    return (
      <div>
        <h1>React</h1>
        <Counter/>
        <Sum/>
        <RandomImages/>
      </div>
    )
  }
}