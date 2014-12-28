adApplication.controller('RegisterController', function ($scope, $location, $log, registerService) {
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
                    text: 'User account created. Please login.',
                    type: 'success',
                    layout: 'top',
                    timeout: 5000
                });
                $location.path('/login');
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

    $scope.loadRegisterPage = function () {
        $location.path('#/register');
    };
});