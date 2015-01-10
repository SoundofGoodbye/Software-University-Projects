adApplication.controller('MyAdsController', function ($scope, $location, myAdsHelperService) {

    $scope.numPerPage = 2;
    $scope.currentPage = 1;
    $scope.data = myAdsHelperService;

    myAdsHelperService.pageNum = $scope.currentPage;

    myAdsHelperService.getAds()
        .$promise
        .then(function (data) {
            myAdsHelperService.ads = data.ads;
            myAdsHelperService.totalItems = data.numItems;
            myAdsHelperService.numPages = data.numPages;
        }, function (error) {

        });

    $scope.pageChanged = function () {
        myAdsHelperService.pageNum = $scope.currentPage;
        myAdsHelperService.getAds()
            .$promise
            .then(function (data) {
                myAdsHelperService.ads = data.ads;
                myAdsHelperService.totalItems = data.numItems;
                myAdsHelperService.numPages = data.numPages;
            },
            function (error) {
                $log.error(error);
            });
    };

    $scope.editAd = function (selectedAdId) {
        $location.path('/edit/' + selectedAdId);
    };

    $scope.adImage = "ad-image-style";
    $scope.adContent = "ad-content-style";
    $scope.adContainerStyle = "ad-container-style";
    $scope.statusContainer = "status-container";

    $scope.getNumPages = function () {
        return $scope.numPages;
    };
});