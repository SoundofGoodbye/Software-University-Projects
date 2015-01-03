adApplication.factory('loginService', function ($resource, $http) {
    var resource = $resource(
        'http://softuni-ads.azurewebsites.net/api/user/login',
        {
            update: {
                method: 'POST'
            }
        });

    function login(user) {
        return resource.save(user);
    }

    return {
        callLogin: login
    }
});