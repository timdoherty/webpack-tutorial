'use strict';

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
