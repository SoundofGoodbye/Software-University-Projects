adApplication.factory('categoryFilterService', function ($resource, $http) {

    var resource = $resource(
        'http://softuni-ads.azurewebsites.net/api/categories',
        {
            getCategories: {method: 'GET', isArray: true}
        });

    function getAllCategories() {
        return resource.query();
    }

    return {
        getAllCategories: getAllCategories
    }
});