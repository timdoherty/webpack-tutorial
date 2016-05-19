'use strict';

import React, { Component } from 'react';
import './default-content.css';

export default class DefaultContent extends Component {
  render() {
    return (
      <div>
        <div className="logo"></div>
        <h1>Webpack: Anatomy of a Module Bundler</h1>
        <div className="ipsum">
          <p>Lorem ipsum dolor sit amet, pretium sit lectus amet auctor eu, aenean dapibus egestas varius scelerisque praesent magna. Etiam massa tellus molestie mollis sem, aliquet etiam, auctor egestas dui quis ligula lobortis, in maecenas, eu lectus suscipit. Cupiditate dapibus malesuada lorem et, aliquet convallis lorem volutpat. Morbi imperdiet cras molestiae morbi mi, eu inceptos porttitor, massa vitae, arcu vel magnis, libero purus curabitur mi. Sapien sit bibendum fringilla.</p>
          <p>Sapien suscipit purus ut pede, donec rutrum quis, in in ut aptent eget bibendum pede. Euismod molestie nam donec tincidunt lectus, mattis quam. Sed tellus. Tincidunt turpis odio diam vehicula lorem aliquam, fringilla et leo, vivamus suspendisse, elit massa auctor consequat massa. Rutrum eu id posuere velit varius, vitae lacus, odio luctus, sollicitudin aptent. Orci suspendisse integer semper, vestibulum laboris malesuada odio wisi urna, tincidunt mauris urna ipsum wisi.</p>
          <p>Risus mattis. Ac condimentum. At vestibulum. Vulputate hendrerit lectus. Sed dignissim eget vestibulum placerat, rutrum tellus sit ac eget nulla turpis.</p>
          <p>Nunc mauris tellus mauris a. Elementum adipiscing, dictum at metus integer deserunt eu, nulla non tempor et sem pede, nunc odio tellus vel, etiam odio donec condimentum semper. Vel odio metus conubia. Quam hymenaeos libero odio, sit fringilla, hendrerit scelerisque dignissim, enim lacus fusce turpis vel, wisi orci vivamus donec in. Donec congue pulvinar amet suspendisse consectetuer, pellentesque mauris id fermentum lacinia eleifend, id lacus. Nulla cras aliquam neque. Commodo sem tortor etiam sem augue. Massa orci libero justo vitae urna. Vivamus quis, vitae blandit turpis laoreet massa pede, aliquet enim. Viverra ipsum maecenas architecto tempus, euismod laoreet ullamcorper, proin libero integer. Diam dapibus pede, id tempor quis vel suscipit, sit etiam, consequat molestie vivamus placerat viverra viverra cum. Sagittis consequat per eleifend id posuere, laoreet lacus nisl.</p>
        </div>
      </div>
    );
  }
}
