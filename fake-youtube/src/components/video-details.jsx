import React from 'react';

const VideoDetails = ({ video }) => {
  if (!video) {
    return <div>Loading ...</div>;
  }

  const videoUrl = `https://www.youtube.com/embed/${video.id.videoId}`;
  const videoTitle = video.snippet.title;
  const videoDescription = video.snippet.description;

  return (
    <div className="video-details col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={videoUrl} ></iframe>
      </div>

      <div className="details">
        <div><b>{videoTitle}</b></div>
        <hr/>
        <div>{videoDescription}</div>
      </div>
    </div>
  );
};

export default VideoDetails;