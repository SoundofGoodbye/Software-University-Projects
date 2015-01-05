var adApplication = angular.module('adsProjectApp', ['ngRoute', 'ngResource', 'ui.bootstrap.pagination'])
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
        }).when('/add', {
            templateUrl: 'templates/add.html',
            controller: 'AddController'
        }).otherwise({redirectTo: '/'});
    });