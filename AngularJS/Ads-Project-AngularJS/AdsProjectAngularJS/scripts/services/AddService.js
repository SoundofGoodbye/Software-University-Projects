adApplication.factory('addService', function ($resource, $http, $window) {
    $http.defaults.headers.common.Authorization = 'Bearer ' + $window.sessionStorage.token;

    var resource = $resource(
        'http://softuni-ads.azurewebsites.net/api/user/ads',
        {
            add: {
                method: 'POST'
            }
        }
    );

    function add(ad) {
        return resource.save(ad)
    }

    return {
        callAdd: add
    }
});