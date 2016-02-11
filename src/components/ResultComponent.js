'use strict';

import React from 'react';

require('styles//Result.scss');

class ResultComponent extends React.Component {
  render() {
    return (
      <a href={this.props.url}>
        <div className="result-component">
          <h1>{this.props.title}</h1>
          <p>{this.props.description}</p>
        </div>
      </a>
    );
  }
}

ResultComponent.displayName = 'ResultComponent';

// Uncomment properties you need
// ResultComponent.propTypes = {};
// ResultComponent.defaultProps = {};

export default ResultComponent;
