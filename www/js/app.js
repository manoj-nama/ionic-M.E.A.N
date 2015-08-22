'use strict';

angular.module('MEAN', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    ionic.Platform.isFullScreen = true;
    window.addEventListener('native.keyboardshow', kbdHandler);
    window.addEventListener('native.keyboardhide', kbdHandler);
  });
    function kbdHandler(e) {
      if(e.keyboardHeight) {
        var el = document.querySelector(".mean-app-view"),
          hgt = el.offsetHeight - e.keyboardHeight;
        document.querySelector(".mean-app-view").style.height = (hgt + 50) + "px";
      } else {
        document.querySelector(".mean-app-view").style.height = "100%";
      }
    }
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('app', {
      url: '/app',
      abstract: true,
      templateUrl: 'templates/menu.html',
      controller: 'AppCtrl',
      controllerAs: 'app'
    })
    .state('app.dashboard', {
      url: '/dash',
      views: {
        'menuContent': {
          templateUrl: 'templates/dashboard.html',
          controller: 'DashboardCtrl',
          controllerAs: 'dashboard'
        }
      }
    })
    .state('app.bootcamp', {
      url: '/bootcamp',
      views: {
        'menuContent': {
          templateUrl: 'templates/bootcamp.list.html',
          controller: 'BootcampCtrl',
          controllerAs: 'bootcamp'
        }
      }
    })
    .state('app.messenger', {
      url: '/messenger',
      views: {
        'menuContent': {
          templateUrl: 'templates/messenger.users.html',
          controller: 'MessengerCtrl',
          controllerAs: 'messenger'
        }
      }
    })
    .state('app.chat', {
      url: '/chat/:id',
      views: {
        'menuContent': {
          templateUrl: 'templates/messenger.chat.html',
          controller: 'MessengerCtrl',
          controllerAs: 'chat'
        }
      }
    });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/dash');
});