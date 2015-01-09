adApplication.controller('LoginController', function ($scope, $location, $window, $rootScope, loginService, headerService) {
    $scope.callLoginService = function () {
        var user = {
            username: $scope.username,
            password: $scope.password
        };

        loginService.callLogin(user)
            .$promise
            .then(function (data) {
                noty({
                    text: 'Login successful',
                    type: 'success',
                    layout: 'top',
                    timeout: 5000
                });
                $window.sessionStorage.token = data.access_token;
                $window.sessionStorage.username = data.username;
                $rootScope.$broadcast("renderInfoLogin", $window);
                $location.path('/');
            },
            function (error) {
                delete $window.sessionStorage.token;
                delete $window.sessionStorage.username;
                //TODO: Noty error
            });
    };

    $scope.loginStyle = 'loginStyle';

    headerService.setHeader('Ads - Login');
});