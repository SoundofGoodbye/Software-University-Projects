adApplication.factory('helperService', function ($resource, $http) {
    var currentAds;
    var categoryId;
    var townId;
    var pageNum;
    var totalItems;
    var numPages;

    var resource = $resource(
        'http://softuni-ads.azurewebsites.net/api/ads?townid=:townId&categoryid=:categoryId&pagesize=2& =:pageNum',
        {
            getAds: {
                method: 'GET'
            }
        }
    );

    function getHelperAds() {
        var categoryId = this.categoryId;
        var townId = this.townId;
        var pageNum = this.pageNum;
        return resource.get(
            {
                townId: townId,
                categoryId: categoryId,
                pageNum: pageNum
            }
        );
    }

    function getCurrentAds() {
        return currentAds;
    }

    function setCurrentAds(ads) {
        currentAds = ads;
    }

    return {
        setAds: setCurrentAds,
        getAds: getCurrentAds,
        ads: currentAds,
        categoryId: categoryId,
        townId: townId,
        pageNum: pageNum,
        getHelperAds: getHelperAds,
        totalItems: totalItems,
        numPages: numPages
    };
});