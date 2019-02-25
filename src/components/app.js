import React, { Component } from 'react';
import VideoSearch from './searchvideos';
import axios from 'axios';
import VideoList from './video-list';
import VideoDetails from './videodetail';


export default class App extends Component {
    state = {videos : [],selectedVideo:null};

    componentDidMount() {
      this.getVideos('flowers');
    }
onVideoSelect = video => {
  this.setState({
    selectedVideo:video
  })
}
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
     this.setState({
       videos:response.data.items,
       selectedVideo:response.data.items[0]
      });
    });
  }
  render() {
    return (
      <div className="ui container">
        <VideoSearch videoSearchTerm = {this.getVideos}/>
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetails video= {this.state.selectedVideo}/>
            </div>
            <div className="3 wide column">
              <VideoList videos = {this.state.videos} 
                onVideoSelect={this.onVideoSelect} />
            </div>
          </div>
        </div>
      </div>

    );
  }
}
