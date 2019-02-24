import React, { Component } from 'react';

export default class VideoSearch extends Component {
  state ={ searchterm : ''};
  
  onSearchChange = event => {
    this.setState({searchterm:event.target.value});

  }
  onFormSubmit = event => {
    event.preventDefault();
    this.props.videoSearchTerm(this.state.searchterm);
    // console.log(this.state.searchterm);
  }

  render() {
    return (
      <div className = "ui container">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Video search for ?</label>
            <input type="text"
               name="first-name" 
               placeholder="Please enter here"
               value={this.state.searchterm}
               onChange={this.onSearchChange}
               />
          </div>
        </form>
      </div>
    );
  }
}
