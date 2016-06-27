import React, {Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import {setVideo } from '../../redux/actions/youtube'


class ListItem extends Component {
    render() {
        const { id: {videoId},
            snippet: {title, description, thumbnails: {default: {url}}}} = this.props.video;
        const onVideo = (event) => {
            event.preventDefault();
            this.props.setVideo(this.props.video)            
            window.scrollTo(0, 0);
        }
        return (
            <a  href="" onClick={ onVideo }>
                <h2>{title}</h2>
                <div>{description}</div>
                <img src={url}/>
            </a>
        )
    }
}

export default connect(null,
    {
        setVideo
    }
)(ListItem)