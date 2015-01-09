adApplication.controller('NavigationController', function ($scope, $window) {
    $scope.navStyle = 'nav-style';

    $scope.isUserLogged = $window.sessionStorage.token;

    refreshNavigationBar();


    $scope.$on("renderInfoLogin", function (event) {
        $scope.isUserLogged = $window.sessionStorage.token;
        refreshNavigationBar();
    });

    function refreshNavigationBar() {
        if ($scope.isUserLogged) {
            $scope.navigationPath = 'templates/nav-bar-logged.html';
        } else {
            $scope.navigationPath = 'templates/nav-login-register.html';
        }
    }
});