'use strict';

import React, { Component } from 'react';

export default class SplitContent extends Component {

  render() {
    return (
      <div id="split-content">This is split content</div>
    );
  }
}

// if(module.hot) {
//   module.hot.accept();
// }
//
// document.querySelector('#split-content').innerHTML = 'I was lazily loaded!';

// document.body.appendChild(document.createElement('hr'));

// alert('foo');
