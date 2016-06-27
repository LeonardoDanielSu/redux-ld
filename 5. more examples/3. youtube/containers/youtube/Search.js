import React, { Component } from 'react'
import { connect } from 'react-redux'
import {search } from '../../redux/actions/youtube'
class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {term: ""}
  }
  render() {
    const {state:{term}} = this;
    const  onSetTerm = (e) =>  {
      e.preventDefault()
      this.props.onSearch(term);
    }
    return (      
      <div>
        <form onSubmit= { onSetTerm }>
          <input value={term} 
              onChange={(e)=>this.setState({term: e.target.value})}/>
          <button type="submit">
            Search
          </button>
        </form>
      </div>
    )
  }
}
function mapDispatchToProps(dispatch){
   return {onSearch: (term) => dispatch(search.bind(null,term))}
}
export default connect(null,
  mapDispatchToProps
)(Search)
