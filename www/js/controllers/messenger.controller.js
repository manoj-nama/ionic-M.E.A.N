'use strict';

angular.module("MEAN")
  .controller("MessengerCtrl", function ($scope, $stateParams) {
    var self = this;

    $scope.users = [
      {name: 'Kaku', lastMsg: 'Yeah!'},
      {name: 'Nikhil Bhandari', lastMsg: 'Okay'},
      {name: 'Sonu', lastMsg: 'Bhaukaal'},
      {name: 'Sahil Chitkara', lastMsg: 'Abe chal ..'},
      {name: 'Vishal Nama', lastMsg: 'Hd leke aaio yad se'},
      {name: 'Node Ninjas', lastMsg: 'Gaur se suniye is joke ko'}
    ];

    if($stateParams.id) {
      $scope.currentUser = $scope.users[$stateParams.id];
    }

  });