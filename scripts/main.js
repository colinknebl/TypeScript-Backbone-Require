requirejs.config({

  baseUrl: 'scripts',

  paths: {
    backbone: 'lib/backbone',
    jquery: 'lib/jquery',
    mustache: 'lib/mustache',
    require: 'lib/require',
    tpl: 'lib/tpl',
    underscore: 'lib/underscore',
    app: 'app',
  }
})

require(['app'], function(app) {
  app.initialize();
})