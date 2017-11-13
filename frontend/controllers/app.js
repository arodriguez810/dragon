var app = angular.module('dragon', ['ngRoute']);
app.run(function ($rootScope) {
    $rootScope.URL = {
        frontendRootPath: 'http://localhost:8080/dragon',
        backendRootPath: 'http://localhost:8080/dragon',
    };
    $rootScope.URL.backendPath = Path.Combine($rootScope.URL.backendRootPath, '/backend');
    $rootScope.LOGOS = {
        logospath: Path.Combine($rootScope.URL.backendPath, '/resources/images/logos'),
    };
    $rootScope.LOGOS.logoLight = Path.Combine($rootScope.LOGOS.logospath, "logo_light.png");
});
app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: '../views/login/login.html',
            controller: 'login'
        });
});