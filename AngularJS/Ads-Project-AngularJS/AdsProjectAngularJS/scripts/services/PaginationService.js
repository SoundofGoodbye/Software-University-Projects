adApplication.factory('paginationService', function ($resource) {
    var resource = $resource('http://softuni-ads.azurewebsites.net/api/ads?pagesize=2&startpage=:pageNum',
        {
            getAds: {
                method: 'GET'
            }
        }
    );

    function currentPageAds(pageNum) {
        return resource.get({pageNum: pageNum});
    }

    function getPagingAds() {
        return resource.get();
    }

    return {
        getAds: getPagingAds,
        callCurrentPageAds: currentPageAds
    };

});