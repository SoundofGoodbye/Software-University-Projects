adApplication.factory('userService', function ($resource, $http, $window) {
    $http.defaults.headers.common['Authorization'] = 'Bearer ' + $window.sessionStorage.token;

    var logoutService = $resource(
        'http://softuni-ads.azurewebsites.net/api/user/logout',
        {
            logout: {
                method: 'POST'
            }
        }
    );

    var updateService = $resource(
        'http://softuni-ads.azurewebsites.net/api/user/profile',
        {
            editUserProfile: {
                method: 'PUT'
            }
        });

    var changePassService = $resource(
        'http://softuni-ads.azurewebsites.net/api/user/changepassword',
        {
            passChange: {
                method: 'PUT'
            }
        }
    );

    function changePassword(pass) {
        return changePassService.save(pass);
    }

    function updateUser(updatedUser) {
        return updateService.save(updatedUser);
    }

    function logout() {
        return logoutService.save();
    }

    return {
        callLogout: logout,
        updateUser: updateUser,
        changePassword: changePassword
    };
});