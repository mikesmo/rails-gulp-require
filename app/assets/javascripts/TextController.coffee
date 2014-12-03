'use strict'

define(['angular'], (angular) ->

  controllers = angular.module('controllers')

  controllers.controller('TextController', ['$scope', ($scope) ->
    $scope.message = 'This is a message'
  ])
)