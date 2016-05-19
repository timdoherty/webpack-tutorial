'use strict';

import React, { Component } from 'react';
import DefaultContent from './default-content';

const mainView = `<div>Main</div>`;

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
        '#main'() {
          require.ensure(['./split-content'], ((require) => {
            const SplitContent = require('./split-content').default;
            // this.setState({view: `foobar`});
            this.setState({view: SplitContent });
          }).bind(this));
        },
        default: () => {
          this.setState({view: DefaultContent });
        }
      };
      const action = routes[window.location.hash] || routes.default;
      action.call(this);
    }).bind(this), false);
  }

  render() {
    // let inner = <SplitContent />;
    return (
      <div>
        {this.state.view === mainView ? this.state.view : <this.state.view />}
      </div>
    );
  }
}
