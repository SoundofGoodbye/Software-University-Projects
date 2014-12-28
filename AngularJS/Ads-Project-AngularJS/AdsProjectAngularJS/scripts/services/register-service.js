adApplication.factory('registerService', function ($resource, $http) {
    var resource = $resource(
        'http://softuni-ads.azurewebsites.net/api/user/register',
        {
            update: {
                method: 'PUT'
            }
        });

    function register(user) {
       /* var user = {};
        user.username = 'test1';
        user.password = '123';
        user.confirmPassword = '123';
        user.name = 'Test';
        user.email = 'test1@gmail.com';
        user.phone = '+359 2 981 981';*/

        return resource.save(user);
    }

    return {
        callRegister: register
    }
});