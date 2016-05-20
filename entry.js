import './style.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Content from './content.js';

document.write(`<div id="root"></div>`);

ReactDOM.render(<Content />, document.getElementById('root'));
