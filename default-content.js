'use strict';

import React, { Component } from 'react';
import './default-content.css';
import {p1, p2, p3, p4} from './lorem-ipsum';

export default class DefaultContent extends Component {
  render() {
    return (
      <div>
        <div className="logo"></div>
        <h1>Webpack: Anatomy of a Module Bundler</h1>
        <div className="ipsum">
          <p>{p1}</p>
          <p>{p2}</p>
          <p>{p3}</p>
          <p>{p4}</p>
        </div>
      </div>
    );
  }
}
