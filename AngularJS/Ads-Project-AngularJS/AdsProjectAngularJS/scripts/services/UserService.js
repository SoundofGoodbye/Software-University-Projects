adApplication.factory('userService', function ($resource, $http, $window) {
    $http.defaults.headers.common.Authorization = 'Bearer ' + $window.sessionStorage.token;

    var logoutService = $resource(
        'http://softuni-ads.azurewebsites.net/api/user/logout',
        {
            logout: {
                method: 'POST'
            }
        }
    );

    function logout() {
       return logoutService.save();
    }

    return {
        callLogout: logout
    };
});