'use strict'

@amdConfig = ->
  deps: ['jquery']
  paths:
    jquery: 'vendor/jquery/dist/jquery'
    angular: 'vendor/angular/angular'
    domReady: 'vendor/domReady/domReady'
  shim:
    angular:
      deps: ['jquery']
      exports: 'angular'

if require.config?
  require.config(@amdConfig())

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

