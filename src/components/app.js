import React, { Component } from 'react';
import VideoSearch from './searchvideos';
import axios from 'axios';
import VideoList from './video-list';

export default class App extends Component {
    state = {videos : []};

  getVideos = searchTerm => {
    const youtubeapikey = "AIzaSyCq15lsPUAwZXbzaqKumV4Q3eCDfC-OWBE";
    axios.get('https://www.googleapis.com/youtube/v3/search?', {
      params: {
        part:'snippet',
        maxResult:5,
        key:youtubeapikey,
        q:searchTerm
      }
    }).then(response => {
     this.setState({videos:response.data.items});
    });
  }
  render() {
    return (
      <div>
        <VideoSearch videoSearchTerm = {this.getVideos}/>
        <span> Search results for videos are : {this.state.videos.length} </span>
        <VideoList videos = {this.state.videos} />
      </div>
    );
  }
}
