document.querySelector('#main').addEventListener('click', function (e) {
  require.ensure(['./split-content'], function (require) {
    require('./split-content');
  });
});
