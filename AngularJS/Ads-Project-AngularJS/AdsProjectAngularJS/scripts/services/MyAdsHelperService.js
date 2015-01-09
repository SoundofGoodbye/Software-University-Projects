adApplication.factory('myAdsHelperService', function ($resource, $http) {
    var pageNum;

    var resource = $resource(
        'http://softuni-ads.azurewebsites.net/api/user/ads?pagesize=2&startpage=:pageNum',
        {
            getAds: {
                method: 'GET'
            }
        }
    );

    function getAds() {
        var pageNum = this.pageNum;
        return resource.get(
            {
                startpage: pageNum
            }
        );
    }

    return {
        getAds: getAds
    };
});