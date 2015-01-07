adApplication.controller('LoginController', function ($scope, $location, $window, loginService, headerService) {
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
                $window.sessionStorage.token = data.access_token;
                console.log("LoginController Success");
                console.log($window.sessionStorage.token);
                $location.path('/');
            },
            function (error) {
                delete $window.sessionStorage.token;
                //TODO: Noty error
            });
    };

    $scope.loginStyle = 'loginStyle';

    headerService.setHeader('Ads - Login');
});