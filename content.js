'use strict';

import React, { Component } from 'react';
import DefaultContent from './default-content';

export default class Content extends Component {
  constructor() {
    super();
    this.state = {
      view: DefaultContent
    };
  }

  componentDidMount() {
    window.addEventListener('hashchange', (() => {
      const routes = {
        '#about'() {
          require.ensure(['./split-content'], ((require) => {
            const SplitContent = require('./split-content').default;
            this.setState({ view: SplitContent });
          }).bind(this));
        },
        default: this.setState.bind(this, { view: DefaultContent })
      };
      const action = routes[window.location.hash] || routes.default;
      action.call(this);
    }).bind(this), false);
  }

  render() {
    return (
      <div id="main">
        <a href="#">home</a> : <a href="#about">about</a>
        <hr />
        <this.state.view />
      </div>
    );
  }
}
