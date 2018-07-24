import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyDkdXISGWBfJubqarIW1CuQsH-h0CdJLi0';

// Create a new component to produce some HTML
class App extends Component {
  constructor (props) {
    super (props);

    this.state = { 
      videos: [],
      selectedVideo: null
    };

    this.videoSearch('snowboarding');
  }

  // define a callback method for the search Component to make a new YTSearch
  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({ 
        videos: videos, // could also be written videos,
        selectedVideo: videos[0]
      });
    });
  }

  render() {
    return (
      <div>
        <SearchBar onSearchTermChange={(term) => this.videoSearch(term)} />
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList 
          onVideoSelect={(selectedVideo) => this.setState({selectedVideo})}
          videos={this.state.videos} />
      </div>
    );
  }
}

// Then get React to put the generated HTML into the DOM (html doc)
ReactDOM.render(<App />, document.querySelector('.container'));