'use strict';

var infiniteNotes = angular.module('pl.hernas.infinitenotes', ['ngAnimate', 'angularFileUpload',
  'ajoslin.promise-tracker', 'cgBusy', 'ui.router', 'ngResource', 'vr.directives.slider',
  'config', 'toaster', 'ngCookies', 'angularLocalStorage', 'ui.select2', 'ui.bootstrap', 'ngSanitize', 'infinite-scroll', 'ngAnimate']);

infiniteNotes.run(function ($rootScope, Config, $package, auth, $stateParams) {
  $rootScope.Config = Config;
  $rootScope.package = $package;
  $rootScope.$stateParams = $stateParams;

});
infiniteNotes.config(function ($stateProvider, $urlRouterProvider, $package, $httpProvider) {
  $urlRouterProvider.otherwise("/");
  $stateProvider
    .state('index', {
      url: "/",
      templateUrl: '../partials/index.html'
    })
});