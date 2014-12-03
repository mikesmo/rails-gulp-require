'use strict'

require.config(
  deps: ['jquery']
  paths:
    jquery: '/vendor/jquery/dist/jquery'
    angular: '/vendor/angular/angular'
    domReady: '/vendor/domReady/domReady'
  shim:
    angular:
      deps: ['jquery']
      exports: 'angular'
)

require([
    'angular'
    'domReady'
    #'TextController'
  ],
(angular, domReady) ->
  #application = angular.module('myAngularApp', ['controllers'])
  app = angular.module('myAngularApp', [])
  app.controller('TextController', ($scope) ->
    $scope.message = 'This is a message'
  )

  domReady(
    () ->
      angular.bootstrap(document, ['myAngularApp'])
  )
)

