var adApplication = angular.module('adsProjectApp', ['ngRoute', 'ngResource', 'ui.bootstrap.pagination'])
    .config(function ($routeProvider, $httpProvider) {

        // Routing
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
        }).when('/myads', {
            templateUrl: 'templates/my-ads.html',
            controller: 'MyAdsController'
        }).when('/user/ads/edit/:param', {
            templateUrl: 'templates/myad-edit.html',
            controller: 'EditAdController'
        }).when('/user/ads/delete/:param', {
            templateUrl: 'templates/delete-confirm-box.html',
            controller: 'DeleteAdController'
        }).when('/user/profile', {
            templateUrl: 'templates/edit-user-profile.html',
            controller: 'EditUserProfileController'
        }).otherwise({redirectTo: '/'});
    });