import React, { Component } from 'react'
class Sum extends Component{
  constructor(props) {
    super(props)
    this.state = {a:1, b: 2}
  }
  render() {
    const {state:{a,b}, props:{sum, onSum}} = this;
    return (
      <div>
        <input value={a} 
            onChange={(e)=>this.setState({a: e.target.value})}/> 
        + <input value={b} 
            onChange={(e)=>this.setState({b: e.target.value})}/>
        = <span>{sum}</span>
        <button onClick={() => onSum(a,b)}> Sum</button>
        <p/>
      </div>
    )
  }
}

import { connect } from 'react-redux'
import { getSum } from '../redux/actions/index'

// const mapStateToProps = (state, ownProps) => ( {
//     sum: state.sum
//   })
// const mapDispatchToProps = (dispatch, ownProps) => {
//   return {
//     onSum: (a,b) => dispatch(getSum(a, b))   
//   }
// }
const SumContainer = connect(
  (state, ownProps) => ( {
    sum: state.sum
  }),
  {onSum: (a,b) => getSum(a, b)}
)(Sum)

export default SumContainer