adApplication.factory('myAdsHelperService', function ($resource, $http, $window, headerService) {
    $http.defaults.headers.common['Authorization'] = 'Bearer ' + $window.sessionStorage.token;

    var pageNum;
    var totalItems;
    var numPages;

    var resource = $resource(
        'http://softuni-ads.azurewebsites.net/api/user/ads?pagesize=2&startpage=:pageNum',
        {
            getAds: {
                method: 'GET'
            }
        }
    );

    var singleAdResource = $resource(
        'http://softuni-ads.azurewebsites.net/api/user/ads/:adId',
        {
            adById: {
                method: 'GET'
            }
        }
    );

    var editAdResource = $resource(
        'http://softuni-ads.azurewebsites.net/api/user/ads/:id',
        {id: '@id'},
        { update: {
            method: 'PUT'
        }
    });

    function getAdById(adId) {
        return singleAdResource.get({
            adId: adId
        });
    }

    function editAd(ad) {
        return editAdResource.update({id: ad.id}, ad);
    }

    function getAds() {
        var pageNum = this.pageNum;
        return resource.get(
            {
                pageNum: pageNum
            }
        );
    }

    headerService.setHeader("Ads - My Ads");

    return {
        getAds: getAds,
        getAdById: getAdById,
        editAd: editAd
    };
});