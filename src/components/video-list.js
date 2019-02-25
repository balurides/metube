import React from 'react';
import style from './../../style/video-item.css';
import VideoItem from './videoItem';

const VideoList = ({videos,onVideoSelect}) => {
    const renderVideoList = videos.map((video) => {
        return <VideoItem key={video.etag} onVideoSelect={onVideoSelect}
        videos={video} />;
    });
    return (
        <div className="ui relaxed divider list video-list" >
            {renderVideoList} 
        </div>
    );
}

export default VideoList;