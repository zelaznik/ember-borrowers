/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {});

  app.import('vendor/basscss.min.css');
  app.import('vendor/fontello/fontello.css');
  app.import('vendor/fontello/font/fontello.ttf',   {destDir: 'assets/font'});
  app.import('vendor/fontello/font/fontello.eot',   {destDir: 'assets/font'});
  app.import('vendor/fontello/font/fontello.svg',   {destDir: 'assets/font'});
  app.import('vendor/fontello/font/fontello.woff',  {destDir: 'assets/font'});
  app.import('vendor/fontello/font/fontello.woff2', {destDir: 'assets/font'});

  app.import('bower_components/moment/moment.js');
  app.import('bower_components/ic-ajax/dist/named-amd/main.js');

  return app.toTree();
};
