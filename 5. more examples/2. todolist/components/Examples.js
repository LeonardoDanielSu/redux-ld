import React, { Component } from 'react'
import Counter from '../containers/examples01/Counter'
import Sum from '../containers/examples01/Sum'
import RandomImages from '../containers/examples01/RandomImages'

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