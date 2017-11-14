app.controller('auth', function ($rootScope, $scope, $http) {
    $scope.text = {};
    $http.get(Path.Combine($rootScope.URL.globalizationPath, 'auth/login.json')).then(function (data) {
        $scope.text.login = data.data;
        document.title = $scope.text.login.title.replacevars();
    });

});