'use strict';

import React, { Component } from 'react';
import './default-content.css';

export default class DefaultContent extends Component {
  render() {
    return (
      <div id="default-content">
        This is the default content
        <div className="logo"></div>
      </div>
    );
  }
}
