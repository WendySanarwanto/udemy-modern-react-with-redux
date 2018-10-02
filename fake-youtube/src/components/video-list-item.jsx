import React from 'react'

const VideoListItem = ({video, onVideoItemClick}) => {
  const videoTitle = video.snippet.title;
  const videoThumbnail = video.snippet.thumbnails.default.url;

  return (
    <li className="video-list-item list-group-item"
      onClick={()=>onVideoItemClick(video)}>
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src={videoThumbnail} alt=""/>
        </div>

        <div className="media-body">
          <div className="media-heading">
            <span>{videoTitle}</span>
          </div>
        </div>
      </div>
    </li>
  );
}

export default VideoListItem;
