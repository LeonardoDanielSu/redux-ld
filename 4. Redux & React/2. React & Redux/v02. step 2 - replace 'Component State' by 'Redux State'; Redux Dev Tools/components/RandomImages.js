import React, { Component } from 'react'

export default class RandomImages extends Component{
  constructor(props) {
    super(props)
  }
  render() {

    return (
      <div>
        <button onClick={this.props.onRandomImages}>
            Random Images></button>
        <br/>CountStatus: 
        <span style={{color:"blue"}}>
            {this.props.images.loading}</span>
        <p/>
        <ImageList images={this.props.images.data}/>
      </div>
    )
  }
}
function ImageList(props) {
    return (
        <div>
        {props.images.map((image)=>
                <img key ={image.id} 
                    src={image.link} 
                    style={{height:"200px"}}/>)}
        </div>
    )
}