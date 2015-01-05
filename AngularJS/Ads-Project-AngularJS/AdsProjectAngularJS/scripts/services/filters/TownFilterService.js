adApplication.factory('townFilterService', function ($resource, $http) {
    var resource = $resource('http://softuni-ads.azurewebsites.net/api/towns'
        , {
            getAllTowns: {method: 'GET', isArray: true}
        });

    function getAllTowns() {
        return resource.query();
    }

    return {
        getAllTowns: getAllTowns
    }
});