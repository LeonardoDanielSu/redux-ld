import { connect } from 'react-redux'
import { getSum } from '../redux/actions/index'
import React, { Component } from 'react'
import Sum from '../components/Sum'


export default  connect(
  (state, ownProps) => ( {
    sum: state.sum
  }),
  {onSum: (a,b) => getSum(a, b)}
)(Sum)