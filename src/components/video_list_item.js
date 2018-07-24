import React from 'react';

//const VideoListItem = (props) => {
  //const video = props.video;
  // above is the same as below - ES6 syntactic sugar
const VideoListItem = ({video, onVideoSelect}) => {
  const imageURL = video.snippet.thumbnails.default.url;
  return (
  <li onClick={() => onVideoSelect(video)} className="list-group-item">

    <div className="video-List media">
      <div className="media-left">
        <img className="media-object" src={imageURL} />
      </div>
    </div>

    <div className="media-body">
      <div className="media-heading">{video.snippet.title}</div>
    </div> 
    
  </li>
  );
};

export default VideoListItem;