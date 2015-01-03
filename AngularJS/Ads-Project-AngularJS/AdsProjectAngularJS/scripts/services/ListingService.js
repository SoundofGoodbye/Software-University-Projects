adApplication.factory('listAdService', function ($resource, $http) {
    var resource = $resource(
        'http://softuni-ads.azurewebsites.net/api/ads?pagesize=3&startpage=2',
        {
            getAd : { method: 'GET'}
        });

    function getAllAds() {
        return resource.get();
    }

    function saveAd(ad) {
        return resource.save(ad);
    }

    return {
        getAllAds: getAllAds,
        save: saveAd
    };
});