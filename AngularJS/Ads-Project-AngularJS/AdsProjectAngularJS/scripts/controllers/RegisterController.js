adApplication.controller('RegisterController', function ($scope, $location, $log, registerService) {
    $scope.callRegisterService = function (user) {
        registerService.callRegister(user)
            .$promise
            .then(function (data) {
                //TODO: Add notification for successful login.
                $log('Success')
            },
            function (error) {
                $log.error(error);
            });
    };

    $scope.loadRegisterPage = function () {
        $location.path('#/register');
    };
});