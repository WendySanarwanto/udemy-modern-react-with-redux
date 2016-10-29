import React, {Component} from 'react';

import VideoListItem from './video-list-item';

class VideoList extends Component {
    render() {
        const videos = this.props.videos;
        console.log('[DEBUG-VideosList] - videos:');
        console.log(videos);
        const onVideoItemClick = this.props.onVideoItemClick;

        return (
            <ul className="videos-list col-md-4 list-group">
                {videos.map(video=>(
                    <VideoListItem 
                        key={video.etag} 
                        video={video} 
                        onVideoItemClick={(video)=>onVideoItemClick(video)} />))}
            </ul>
        );
    }
}

export default VideoList;