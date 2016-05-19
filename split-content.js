'use strict';

import React, { Component } from 'react';
import './split-content.css';
import {p1, p2} from './lorem-ipsum';

export default class SplitContent extends Component {
  render() {
    return (
      <div>
        <h1>What is Webpack?</h1>
        <div className="what-is" />
        <div className="ipsum">
          <p>{p1}</p>
          <p>{p2}</p>
        </div>
      </div>
    );
  }
}
