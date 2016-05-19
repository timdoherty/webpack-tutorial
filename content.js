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
