import React, { Component } from 'react'
import { connect } from 'react-redux'
import { decrease } from '../redux/actions/index'
import Counter from '../components/Counter'

export default connect(
  (state, ownProps) => ({
    count: state.count,
    prop2: state.prop // just an example in case of many properties
  }),
  {
    onDecrement: decrease,
    func2: () => {} // just an example in case you need many functions from dispatch
  }
)(Counter)