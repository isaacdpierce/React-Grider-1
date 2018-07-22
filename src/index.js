import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
const API_KEY = 'AIzaSyDkdXISGWBfJubqarIW1CuQsH-h0CdJLi0';

YTSearch({key: API_KEY, term: 'surfboards'}, function(data) {
  console.log(data);
});

// Create a new component to produce some HTML
class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
      </div>
    );
  }
}

// Then get React to put the generated HTML into the DOM (html doc)
ReactDOM.render(<App />, document.querySelector('.container'));