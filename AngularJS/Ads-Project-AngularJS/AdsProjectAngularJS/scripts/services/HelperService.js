adApplication.factory('helperService', function ($resource, $http) {
    var currentAds;

    function getCurrentAds() {
        return currentAds;
    }

    function setCurrentAds(ads) {
        currentAds = ads;
    }

    return {
        setAds: setCurrentAds,
        getAds: getCurrentAds
    };
});