// { Component } imports Component from React library then assigns it to the variable Component. That's how we can use it instead of extends React.Component below
import React, { Component } from 'react';
import ReactDOM from 'react-dom';


  

class SearchBar extends Component {
  constructor (props) {
      super(props);
  
      this.state = { term: '' };
  }
// The input below tells the state what it SHOULD be
  render () {
    return (
      <div className="search-bar">
       <input 
       value={this.state.term}
       onChange={event => this.onInputChange(event.target.value)} />
      </div>
    );
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term); 
  }
}

export default SearchBar;