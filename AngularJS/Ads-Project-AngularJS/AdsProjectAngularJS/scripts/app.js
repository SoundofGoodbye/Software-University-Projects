var adApplication = angular.module('adsProjectApp', ['ngRoute','ngResource'])
    .config(function ($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: 'templates/home.html',
            controller: 'HomeController'
        });
    });