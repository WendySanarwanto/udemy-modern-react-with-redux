import React, {Component} from 'react'

class VideoListItem extends Component {
    render () {
        const video = this.props.video;        
        const videoTitle = video.snippet.title;
        const videoThumbnail = video.snippet.thumbnails.default.url;
        const onVideoItemClick = this.props.onVideoItemClick;

        return (
            <li className="video-list-item list-group-item"
                onClick={()=>onVideoItemClick(video)}>
                <div className="media">
                    <div className="media-left">
                        <img src={videoThumbnail} alt=""/>
                    </div>

                    <div className="media-body">
                        <div className="media-heading">
                            <span>{videoTitle}</span>
                        </div>
                    </div>
                </div>
            </li>
        )
    }
}

export default VideoListItem