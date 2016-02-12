'use strict';

import React from 'react';

require('styles//Search.scss');

class SearchComponent extends React.Component {
  render() {
    return (
      <div className="search-component">
        <input type="text" value={this.props.query} onChange={this.props.updateQuery}/>
        <a className="btn" href="https://en.wikipedia.org/wiki/Special:Random" target="_tab">Random</a>
      </div>
    );
  }
}

SearchComponent.displayName = 'SearchComponent';

// Uncomment properties you need
// SearchComponent.propTypes = {};
// SearchComponent.defaultProps = {};

export default SearchComponent;
