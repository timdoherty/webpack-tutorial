import {p1, p2, p3, p4} from './lorem-ipsum';

'use strict';

const content = `
  <div class="logo"></div>
  <h1>Webpack: Anatomy of a Module Bundler</h1>
  <div class="ipsum">
    <p>${p1}</p>
    <p>${p2}</p>
    <p>${p3}</p>
    <p>${p4}</p>
  </div>
`;

document.write(`
  <div id="main">
    <a href="#">home</a> : <a href="#about">about</a>
    <hr />
    <div id="content">
      ${content}
    </div>
  </div>
`);

window.addEventListener('hashchange', () => {
  const routes = {
    '#about'() {
      require.ensure(['./split-content'], (require) => {
        require('./split-content').render();
      });
    },
    default: () => {
      document.querySelector('#content').innerHTML = content;
    }
  };
  const action = routes[window.location.hash] || routes.default;
  action();
}, false);
