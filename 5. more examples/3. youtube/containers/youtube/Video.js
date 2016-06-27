import React, {Component, PropTypes } from 'react'
import { connect } from 'react-redux'
class Video extends Component {
  render() {
    const {props:{video}} = this;
    if(!video){
      return <div></div>
    }
    const { id:{videoId} } = video;
    return (
      <p>
          <br/>
          <iframe width="480" height="270" 
                  src={`https://www.youtube.com/embed/${videoId}`}
                  frameborder="0" allowfullscreen>
          </iframe>      
      </p>
    )
  }
}

export default  connect( (state)=>({
    video: state.youtube.video
  }),
  null
)(Video)



