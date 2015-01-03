adApplication.controller('LoginController', function ($scope, $location, loginService, headerService) {
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
                //TODO: Save session token somewhere.
                $location.path('/');
            },
            function (error) {
                //TODO: Noty error
            });
    };

    $scope.loginStyle = 'loginStyle';

    headerService.setHeader('Ads - Login');
});