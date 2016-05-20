# webpack-tutorial
Tutorial originally created for an [SBJS event](http://www.meetup.com/sbjavascript/events/229239289/)

Corresponding slides are [here](https://docs.google.com/presentation/d/1qHeoAXfspiPh9236sGst7WfDH5dqTMvXsE0Kr_SLyeU/edit?usp=sharing)

What is Webpack? Is it really automagical? Can it replace my build system? What the heck is a module bundler anyway?

Webpack is arguably the most popular module bundling solution out there today. It's undeniably powerful, and does a lot right out of the box, but its configuration can be daunting and the available examples are often complex and unapproachable.

This tutorial builds on the slide deck linked above and walks step-by-step from absolute webpack basics through to a simple React application with Hot Module Replacement

## Prerequisites
* Node.js installed (preferably 5.x + npm 3.x)
* Using the CLI is easier if "node_modules/.bin" is in your path

To see each step in action:

`$ git checkout step<step #>`

`$ npm install`

### Step 1 - The Basics
* `$ mkdir webpack-tutorial && cd $_`
* `$ npm init` - follow the prompts
* `$ npm install --save-dev webpack`
* Create an index.html file:
```
<html>
    <head>
        <meta charset="utf-8">
    </head>
    <body>
        <script type="text/javascript" src="bundle.js" charset="utf-8"></script>
    </body>
</html>
```
* Create a new file, entry.js:
```
document.write('<a href="#">home</a> : <a href="#about">about</a>');
```
* `$ webpack /.entry bundle.js`
* Open index.html in a browser

### Step 2 - Dependencies
* Create a new file, content.js:
```
module.exports = '<a href="#">home</a> : <a href="#about">about</a>';
```
* Update entry.js to require() content.js
```
document.write(require('./content.js'));
```
* `$ webpack /.entry bundle.js`
* Open index.html in a browser

### Step 3 - Add a Loader
* `$ npm install --save-dev style-loader css-loader`
* Create a new file, style.css:
```
body {
  background: silver;
}
```
* Import styles.css from entry.js using inline syntax:
```
require('style!css!./style.css');
document.write(require('./content.js'));
```
* `$ webpack /.entry bundle.js`
* The "style" and "css" loaders will load your styles into the bundle and inject them into the HTML document as style tags
* Open index.html in a browser

### Step 4 - Loader Module Binding
* Adding the loaders in the require statement is verbose, module binding lets us just require() the css file
* Import styles.css from entry.js without inline syntax
```
require('./style.css');
document.write(require('./content.js'));
```
* `$ webpack ./entry bundle.js —module-bind ‘css=style!css'`
* Open index.html in a browser

### Step 5 - Another Loader + webpack.config.js
* Install the url-loader for inlining images as base64-encoded strings
* `$ npm install --save-dev url-loader`
* Add a logo placeholder in content.js:
```
module.exports = '<a href="#">home</a> : <a href="#about">about</a><div class="logo"></div>';
```
* Add background image for the logo placeholder to styles.css:
```
body {
  background: white;
}
.logo {
  background-image: url('./webpack-logo.png');
  width: 497px;
  height: 270px;
  margin: auto;
}
```
* Add webpack.config.js with loaders for .css and .png files:
```
module.exports = {
  entry: "./entry.js",
  output: {
    path: __dirname,
    filename: "bundle.js"
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: "style!css" },
      { test: /\.png$/, loader: "url" }
    ]
  }
};
```
* Now we don't need to pass options to the CLI
* `$ webpack`
* Open index.html in a browser

### Step 6 - Code splitting
* Move the document.write statement from entry.js to content.js, with some additional markup elements:
```
document.write('<div id="main"><a href="#">home</a> : <a href="#about">about</a><hr /><div class="logo"></div><div id="split-content"></div></div>');
```
* Remove the document.write statement from entry.js and just require() content.js
```
require('./style.css');
require('./content.js');
```
* Add split-content.js
```
document.querySelector('#split-content').innerHTML = 'I was lazily loaded!';
```
* Add window hash change event handler (poor man's router) to content.js, which loads split-content.js lazily with require.ensure()
```
document.write('<div id="main"><a href="#">home</a> : <a href="#about">about</a><hr /><div class="logo"></div><div id="split-content"></div></div>');

window.addEventListener('hashchange', function() {
  var routes = {
    '#about': function () {
      require.ensure(['./split-content'], function (require) {
        var lazyModule = require('./split-content');
      });
    },
    default: function () {}
  };
  var action = routes[window.location.hash] || routes.default;
  action();
}, false);
```
* `$ webpack`
* Open index.html in a browser, click on "about" and you should see "I was lazily loaded!" appear under the webpack logo

### Step 7 - Webpack-dev-server
* `$ npm install --save-dev webpack-dev-server`
* `$ webpack-dev-server —inline`
* Open http://localhost:8080 in a browser
* Try changing some code, watch the command line update the bundle and the browser refresh automatically
* Rather than typing `$ webpack-dev-server —inline` every time we start the dev server let's add an npm start script:
* package.json:
```
{
  "name": "webpack-tutorial",
  ...
  "scripts": {
    "start": "webpack-dev-server --inline"
  },
  ...
}
```

### Step 8 - Hot Module Replacement (HMR)
* Add HMR support to split-content.js:
* Update npm start script with "hot" flag:
* package.json:
```
{
  "name": "webpack-tutorial",
  ...
  "scripts": {
    "start": "webpack-dev-server --inline --hot"
  },
  ...
}
```
* `$ npm start`
* Open http://localhost:8080 in a browser
* Change split-content.js, watch HMR in action

### Step 9 - Plugins
* Add UglifyJS plugin to webpack.config.js:
```
var webpack = require('webpack');

module.exports = {
    entry: "./entry.js",
    output: {
      path: __dirname,
      filename: "bundle.js"
    },
    devtool: '#source-map',
    plugins: [
      new webpack.optimize.UglifyJsPlugin({
        compress: {
         warnings: false
        },
        sourceMap: true
      })
    ],
    module: {
      loaders: [
        { test: /\.css$/, loader: "style!css" },
        { test: /\.png$/, loader: "url" }
      ]
    }
};
```
* `$ npm start`
* Open http://localhost:8080 in a browser
* Open your brower's devtools and confirm uglified bundle(s)

### Step 10 - ES2015
* `$ npm install --save-dev babel-core babel-loader babel-preset-es2015`
* Update modules with ES2015 syntax
* entry.js:
```
import './style.css';
import './content.js';
```
* content.js:
```
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
```
* Update webpack config:
```
var webpack = require('webpack');

module.exports = {
  entry: './entry.js',
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  devtool: '#source-map',
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
       warnings: false
      },
      sourceMap: true
    })
  ],
  module: {
    loaders: [
      { test: /\.css$/, loader: 'style!css' },
      { test: /\.png$/, loader: 'url' },
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /(node_modules)/,
        query: {
          presets: ['es2015']
        }
      }
    ]
  }
};
```
* `$ npm start`
* Open http://localhost:8080 in a browser
* Open your brower's devtools and confirm ES2015 sourcemaps

### Step 11 - React / JSX
* `$ npm install --save-dev react-hot-loader babel-preset-react`
* Change modules to React components
* `$ npm start`
* Demo React HMR support
