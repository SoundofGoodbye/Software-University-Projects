adApplication.factory('categoryFilterService', function ($resource, $http) {
    var selectedCatId;
    var categories;

    function getSelectedCatId() {
        return this.selectedCatId;
    }

    function getCategories() {
        return categories;
    }

    function setCategories(categories) {
        this.categories = categories;
    }

    var CategoryResource = $resource(
        'http://softuni-ads.azurewebsites.net/api/categories',
        {
            getCategories: {method: 'GET', isArray: true}
        });

    function getAllCategories() {
        return CategoryResource.query();
    }

    return {
        getAllCategories: getAllCategories,
        get: getCategories,
        set: setCategories,
        getSelectedCatId: getSelectedCatId
    };
});