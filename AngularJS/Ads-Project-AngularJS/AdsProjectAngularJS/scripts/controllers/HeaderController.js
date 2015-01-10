adApplication.controller('HeaderController', function ($scope, $window, $rootScope, $location, headerService, userService) {
    $scope.headerData = headerService;

    $scope.username = $window.sessionStorage.username;
    $scope.isUserLogged = $window.sessionStorage.token;

    $scope.callLogout = function () {
        userService.callLogout()
            .$promise
            .then(function (data) {
                delete $window.sessionStorage.token;
                delete $window.sessionStorage.username;
                $rootScope.$broadcast('renderInfoLogin', $window);
                noty({
                    text: 'Logged out successfully',
                    type: 'success',
                    layout: 'top',
                    timeout: 5000
                });

                // Redirect to home page.
                $location.path('/');
            },
            function (error) {

            });
    };

    $scope.$on("renderInfoLogin", function (event) {
        $scope.username = $window.sessionStorage.username;
        $scope.isUserLogged = $window.sessionStorage.token;
    });
});