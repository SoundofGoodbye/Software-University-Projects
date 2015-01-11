adApplication.controller('MyAdsController', function ($scope, $location, $log, myAdsHelperService) {
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
            $log.error(error);
        });

    $scope.deleteAd = function (selectedAdId) {
        $location.path("/user/ads/delete/" + selectedAdId);
    };

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
        $location.path('/user/ads/edit/' + selectedAdId);
    };

    $scope.deactivateAd = function (selectedAdId) {
        myAdsHelperService.deactivateAd(selectedAdId)
            .$promise
            .then(function (data) {
                noty({
                    text: 'Ad deactivated successfully.',
                    type: 'success',
                    layout: 'top',
                    timeout: 5000
                });
            }, function (error) {
                noty({
                    text: 'Problem while deactivating ad.',
                    type: 'error',
                    layout: 'top',
                    timeout: 5000
                });
            });
    };

    $scope.callPublishAgainService = function (adId) {
        myAdsHelperService.publishAgain(adId)
            .$promise
            .then(function (data) {
                noty({
                    text: 'Ad published successfully.',
                    type: 'success',
                    layout: 'top',
                    timeout: 5000
                });
            },
            function (error) {
                noty({
                    text: 'Error while publishing ad.',
                    type: 'success',
                    layout: 'top',
                    timeout: 5000
                });
            });
    };

    $scope.adImage = "ad-image-style";
    $scope.adContent = "ad-content-style";
    $scope.adContainerStyle = "ad-container-style";
    $scope.statusContainer = "status-container";

    $scope.getNumPages = function () {
        return $scope.numPages;
    };
});