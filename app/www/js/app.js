// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic','Iss.Controllers','Iss.Factories','Iss.Directives','lbServices'])


    .config(function ($stateProvider, $urlRouterProvider,LoopBackResourceProvider) {

        $stateProvider
            .state('login',{
                url:'/login',
                templateUrl:'templates/login.html',
                controller:'LogInCtrl'
            })
            .state('signup',{
                url:'/signup',
                templateUrl:'templates/signup.html',
                controller:'SignUpCtrl'
            })
            .state('forgot',{
                url:'/forgot',
                templateUrl:'templates/forgot.html',
                controller:'ForgotCtrl'
            });

        $urlRouterProvider.otherwise('login');


        // Use a custom auth header instead of the default 'Authorization'
        LoopBackResourceProvider.setAuthHeader('X-Access-Token');

        // Change the URL where to access the LoopBack REST API server
        LoopBackResourceProvider.setUrlBase('http://localhost:3000/api');
    })
.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});
