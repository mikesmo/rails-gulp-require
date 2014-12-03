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
    'app'
  ],
(angular, domReady) ->
  domReady(
    () ->
      angular.bootstrap(document, ['myAngularApp'])
  )
)

