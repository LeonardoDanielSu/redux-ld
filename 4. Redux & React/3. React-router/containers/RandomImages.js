import React, { Component } from 'react'
import RandomImages from '../components/RandomImages'
import { connect } from 'react-redux'
import { getRandomImages } from '../redux/actions/index'

export default connect(
  (state, ownProps) =>( {
    images: state.images
  }),
  {onRandomImages: () => getRandomImages}
)(RandomImages)