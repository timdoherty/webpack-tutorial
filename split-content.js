'use strict';

import React, { Component } from 'react';
import './split-content.css';

export default class SplitContent extends Component {
  render() {
    return (
      <div>
        <h1>What is Webpack?</h1>
        <div className="what-is" />
        <div className="ipsum">
          <p>Lorem ipsum dolor sit amet, pretium sit lectus amet auctor eu, aenean dapibus egestas varius scelerisque praesent magna. Etiam massa tellus molestie mollis sem, aliquet etiam, auctor egestas dui quis ligula lobortis, in maecenas, eu lectus suscipit. Cupiditate dapibus malesuada lorem et, aliquet convallis lorem volutpat. Morbi imperdiet cras molestiae morbi mi, eu inceptos porttitor, massa vitae, arcu vel magnis, libero purus curabitur mi. Sapien sit bibendum fringilla.</p>
        </div>
      </div>
    );
  }
}
