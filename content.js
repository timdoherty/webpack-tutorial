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
