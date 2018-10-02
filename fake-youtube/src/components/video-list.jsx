import React from 'react';

import VideoListItem from './video-list-item';

const VideoList = ({videos, onVideoItemClick}) => {
  return (
    <ul className="videos-list col-md-4 list-group">
      { 
        videos.map(video=>(
          <VideoListItem 
            key={video.etag} 
            video={video} 
            onVideoItemClick={(video)=>onVideoItemClick(video)} />))
      }
    </ul>
  );
};

export default VideoList;
