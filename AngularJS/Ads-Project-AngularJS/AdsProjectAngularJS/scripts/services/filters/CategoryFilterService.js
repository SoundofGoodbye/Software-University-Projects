adApplication.factory('categoryFilterService', function ($resource, $http) {

    var CategoryResource = $resource(
        'http://softuni-ads.azurewebsites.net/api/categories',
        {
            getCategories: {method: 'GET', isArray: true}
        });

    function getAllCategories() {
        return CategoryResource.query();
    }

    return {
        getAllCategories: getAllCategories
    }
});