adApplication.factory('myAdsService', function ($resource, $http, $window) {
    $http.defaults.headers.common.Authorization = 'Bearer ' + $window.sessionStorage.token;

    var myAdsService = $resource(
        'http://softuni-ads.azurewebsites.net/api/user/ads',
        {
            logout: {
                method: 'GET'
            }
        }
    );

    function getMyAds() {
        return myAdsService.get();
    }

    return {
        callMyAds: getMyAds
    }

});