adApplication.factory('filterService', function ($resource, $http) {
    var resource = $resource(
        'http://softuni-ads.azurewebsites.net/api/ads?townid=:townId&categoryid=:categoryId',
        {
            update: {
                method: 'GET'
            }
        });

    function filter(townId, categoryId) {
        return resource.get(
            {
                townId: townId,
                categoryId: categoryId
            });
    }

    return {
        callFilter: filter
    }
});