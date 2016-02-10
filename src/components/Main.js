require('normalize.css');
require('styles/App.css');

import React from 'react';
import $ from 'jquery';

import SearchComponent from './SearchComponent';
import ResultComponent from './ResultComponent';

class AppComponent extends React.Component {
  constructor() {
    super();
    this.api = {
      query: 'https://en.wikipedia.org/w/api.php?action=query&prop=extracts&format=json&formatversion=2&callback=?&exchars=500&exintro=&explaintext=&redirects=&titles=',
      random: 'https://en.wikipedia.org/w/api.php?format=json&callback=?&action=query&list=random&rnlimit=10&rnnamespace=0'
    }
    this.state = {
      query: '',
      results: []
    }
  }
  updateQueryResults() {
    if (this.state.query != '') {
      $.getJSON(this.api.query + encodeURI(this.state.query), data => {
        this.setState({
          results: data.query.pages
        })
      });
    }
    else {
      this.setState({
        results: []
      })
    }
  }
  render() {
    return (
      <div className="index">
        <SearchComponent query={this.state.query} updateQuery={event => {this.setState({query:event.target.value}, this.updateQueryResults)}}/>
        <div className="result-container">
          {this.state.results.map(function(result, index) {if(!result.missing || !result.invalid){return <ResultComponent key={index} title={result.title} description={result.extract} />}})}
        </div>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
