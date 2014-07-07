// Karma configuration
// http://karma-runner.github.io/0.10/config/configuration-file.html

module.exports = function(config) {
  config.set({
    preprocessors: {
      'app/partials/**/*.html': ['ng-html2js']
    },

    ngHtml2JsPreprocessor: {
      stripPrefix: 'app/',
      moduleName: 'allTemplates'
    },
    // base path, that will be used to resolve files and exclude
    basePath: '',

    // testing framework to use (jasmine/mocha/qunit/...)
    frameworks: ['mocha', 'chai', 'sinon'],

    // list of files / patterns to load in the browser
    files: [
      'app/bower_components/jquery/jquery.js',
      'app/bower_components/jquery-cookie/jquery.cookie.js',
      'app/bower_components/angular/angular.js',
      'app/bower_components/angular-mocks/angular-mocks.js',
      'app/bower_components/angular-resource/angular-resource.js',
      'app/bower_components/angular-cookies/angular-cookies.js',
      'app/bower_components/angular-sanitize/angular-sanitize.js',
      'app/bower_components/angular-route/angular-route.js',
      'app/bower_components/angular-ui-router/release/angular-ui-router.js',
      'app/bower_components/venturocket-angular-slider/build/angular-slider.js',
      'app/bower_components/AngularJS-Toaster/toaster.js',
      'app/bower_components/angularLocalStorage/src/angularLocalStorage.js',
      'app/bower_components/angular-ui-select2/src/select2.js',
      'app/bower_components/duck-angular/duck-angular.js',
      'app/bower_components/ngInfiniteScroll/build/ng-infinite-scroll.js',
      'app/__grunt_config.js',
      'app/bower_components/angular-*/dist/*.js',
      'app/bower_components/angular-*/*.js',
      'app/scripts/app.js',
      'app/scripts/*.js',
      'app/partials/**/*.html',
      'app/scripts/**/*.js',
      'test/mock/**/*.js',
      'test/helpers/**/*.js',
      'test/spec/**/*.js'
    ],

    // list of files / patterns to exclude
    // We need to exclude angular-scenario because tests are not visible from jasmine then
    exclude: [
      'app/bower_components/angular-scenario/*.js'
    ],

    // web server port
    port: 8080,

    // level of logging
    // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,


    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - PhantomJS
    // - IE (only Windows)
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: false
  });
};
