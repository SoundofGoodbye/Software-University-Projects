adApplication.controller('RegisterController', function ($scope, $location, $log, registerService, headerService, loginService) {
    $scope.callRegisterService = function () {
        var user = {
            username: $scope.username,
            password: $scope.password,
            confirmPassword: $scope.confirmPassword,
            name: $scope.name,
            email: $scope.email,
            phone: $scope.phone,
            town: $scope.town
        };

        registerService.callRegister(user)
            .$promise
            .then(function (data) {
                noty({
                    text: 'User account created.',
                    type: 'success',
                    layout: 'top',
                    timeout: 5000
                });
                loginService.callLogin(user)
                    .$promise
                    .then(function (data) {
                        $location.path('/');
                    },
                    function (error) {
                        $log.error(error);
                    });
            },
            function (error) {
                noty({
                    //TODO: Fix error display.
                    text: error.responseJSON,
                    type: 'error',
                    layout: 'top',
                    timeout: 5000
                })
            });
    };

    /**
     * Change the header title.
     */
    headerService.setHeader('Ads - Registration');

    $scope.loadRegisterPage = function () {
        $location.path('#/register');
    };
});