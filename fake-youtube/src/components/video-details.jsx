import React, {Component} from 'react';

class VideoDetails extends Component {
    render() {
        const video = this.props.video;
        let videoUrl, videoTitle, videoDescription;
        if (video){
            videoUrl = `https://www.youtube.com/embed/${video.id.videoId}`; 
            videoTitle = video.snippet.title;
            videoDescription = video.snippet.description;
        }
         
        return (
            <div className="video-details col-md-8">
                <div className="embed-responsive embed-responsive-16by9">
                    <iframe className="embed-responsive-item" src={videoUrl}></iframe>
                </div> 

                <div className="details">
                    <div><b>{videoTitle}</b></div>
                    <hr/>
                    <div>{videoDescription}</div>
                </div>                           
            </div>
        );
    }
}

export default VideoDetails;