'use strict';

angular.module("MEAN")
  .controller("DashboardCtrl", function ($scope, $state) {
    var DashboardCtrl= this;

    $scope.items = [
      {id: 1, text: "Bootcamp meeting", time: +new Date(), type: "cal"},
      {id: 2, text: "JS Channel", time: +new Date(), type: "meet"},
      {id: 3, text: "CV-GUI Standup", time: +new Date(), type: "standup"},
      {id: 4, text: "Plugin discussion", time: +new Date(), type: "meet"},
      {id: 5, text: "Retrospective", time: +new Date(), type: "meet"},
      {id: 6, text: "Fun team meeting", time: +new Date(), type: "cal"},
      {id: 7, text: "Growth framework", time: +new Date(), type: "cal"},
      {id: 8, text: "Conference meet", time: +new Date(), type: "meet"},
      {id: 9, text: "Nodeschool meeting", time: +new Date(), type: "meet"},
      {id: 10, text: "Hiring meeting", time: +new Date(), type: "cal"},
      {id: 11, text: "Hiring meeting", time: +new Date(), type: "cal"},
      {id: 12, text: "Hiring meeting", time: +new Date(), type: "standup"},
      {id: 13, text: "Hiring meeting", time: +new Date(), type: "google"},
      {id: 14, text: "Hiring meeting", time: +new Date(), type: "cal"},
      {id: 15, text: "Hiring meeting", time: +new Date(), type: "standup"},
      {id: 16, text: "Hiring meeting", time: +new Date(), type: "meet"},
      {id: 17, text: "Growth Framework", time: +new Date(), type: "cal"}
    ];

    $scope.navigateToBootcamp = function () {
      $state.go("app.bootcamp");
    };

  });