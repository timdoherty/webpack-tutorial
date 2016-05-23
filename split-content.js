import {p1, p2} from './lorem-ipsum';
import './split-content.css';

if(module.hot) {
  module.hot.accept();
}

export const render = () => {
  document.querySelector('#content').innerHTML = `
    <h1>What is Webpack?</h1>
    <div class="what-is"></div>
    <div class="ipsum">
      <p>${p1}</p>
      <p>${p2}</p>
    </div>
  `;
};
