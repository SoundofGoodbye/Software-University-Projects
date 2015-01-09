adApplication.controller('MyAdsController', function ($scope, myAdsService, myAdsHelperService) {

    $scope.numPerPage = 2;
    $scope.totalItems;
    $scope.currentPage;
    $scope.ads;

    myAdsService.callMyAds()
        .$promise
        .then(function (data) {
            $scope.totalItems = data.numItems;
            $scope.ads = data.ads;
        }, function (error) {

        });

    $scope.pageChanged = function () {
        myAdsHelperService.pageNum = $scope.currentPage;
        myAdsHelperService.getHelperAds()
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
});