window.addEventListener("hashchange", function() {
  var routes = {
    '#main': function () {
      require.ensure(['./split-content'], function (require) {
        var lazyModule = require('./split-content');
      });
    },
    default: function () {}
  };
  var action = routes[window.location.hash] || routes.default;
  action();
}, false);
