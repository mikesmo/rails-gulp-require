'use strict'

define(['angular', 'controllers'], (angular) ->

  controllers = angular.module('controllers')

  controllers.controller('TextController', ['$scope', ($scope) ->
    $scope.message = 'This is a message'
  ])
)