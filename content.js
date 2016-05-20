'use strict';

document.write(`
  <div id="main">
    <a href="#">home</a> : <a href="#about">about</a>
    <hr />
    <div class="logo"></div>
    <div id="split-content"></div>
  </div>
`);

window.addEventListener('hashchange', () => {
  const routes = {
    '#about'() {
      require.ensure(['./split-content'], (require) => {
        const lazyModule = require('./split-content');
      });
    },
    default: () => {}
  };
  const action = routes[window.location.hash] || routes.default;
  action();
}, false);
