adApplication.factory('registerService', function ($resource, $http) {
    var resource = $resource(
        'http://softuni-ads.azurewebsites.net/api/user/register',
        {
            update: {
                method: 'PUT'
            }
        });

    function register(user) {
        return resource.save(user);
    }

    return {
        callRegister: register
    }
});