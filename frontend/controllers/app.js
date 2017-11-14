var app = angular.module('dragon', ['ngRoute']);

function GLOBAL(varname) {
    return eval("angular.element(\"body\").scope().{0}".format(varname));
}

app.run(function ($rootScope, $http) {
    $rootScope.LAN = "en";
    $rootScope.URL = {
        frontendRootPath: 'http://localhost:8080/dragon',
        backendRootPath: 'http://localhost:8080/dragon',
    };
    $rootScope.URL.backendPath = Path.Combine($rootScope.URL.backendRootPath, 'backend');
    $rootScope.URL.resourcePath = Path.Combine($rootScope.URL.backendPath, 'resources');
    $rootScope.URL.globalizationPath = Path.Combine($rootScope.URL.resourcePath, "globalization/{0}").format($rootScope.LAN);
    $rootScope.LOGOS = {
        logospath: Path.Combine($rootScope.URL.resourcePath, 'images/logos'),
    };
    $rootScope.LOGOS.logoLight = Path.Combine($rootScope.LOGOS.logospath, "logo_light.png");
    $rootScope.URL.termsPath = Path.Combine($rootScope.URL.resourcePath, 'appconfig/terms.json');
    $http.get($rootScope.URL.termsPath).then(function (data) {
        $rootScope.terms = data;
    });
});
app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: '../views/login/login.html',
            controller: 'login'
        });
});