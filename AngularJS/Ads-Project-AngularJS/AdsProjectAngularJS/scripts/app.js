var adApplication = angular.module('adsProjectApp', ['ngRoute', 'ngResource'])
    .config(function ($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: 'templates/home.html',
            controller: 'HomeController'
        }).when('/register', {
            templateUrl: 'templates/register.html',
            controller: 'RegisterController'
        }).when('/login', {
            templateUrl: 'templates/login.html',
            controller: 'LoginController'
        }).otherwise({redirectTo: '/'});
    });