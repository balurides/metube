import React from 'react';

const VideoDetails = ({video})=> {
    if(!video){
        return <div> Loading </div>
    }
    const youtubeEmbedUrl = `https://www.youtube.com/embed/${video.id.videoId}`;
return (
    <div>
        <div className="ui embed">
            <iframe
                title="video player"
                src={youtubeEmbedUrl}>
            </iframe>
        </div>
        <div className="ui segment">
            <h3 className="ui header"> 
                {video.snippet.title} 
            </h3>
            <p>
                {video.snippet.description}
            </p>
        </div>
         
    </div>);

}
export default VideoDetails;