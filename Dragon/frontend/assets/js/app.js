var app = angular.module('dragon', ['ngRoute']);
app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: '../../views/login/login.html',
            controller: 'login'
        })
});