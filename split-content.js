'use strict';

import React, { Component } from 'react';
import './split-content.css';

export default class SplitContent extends Component {
  render() {
    return (
      <div id="split-content">
        <h1>What is Webpack?</h1>
        <div className="what-is" />
      </div>
    );
  }
}
