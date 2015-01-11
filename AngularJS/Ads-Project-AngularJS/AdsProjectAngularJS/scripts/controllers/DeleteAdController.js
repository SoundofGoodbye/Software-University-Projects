adApplication.controller("DeleteAdController", function ($scope, $log, $routeParams, myAdsHelperService) {
    $scope.adId = $routeParams.param;
    $scope.data = myAdsHelperService;

    myAdsHelperService.getAdById($scope.adId)
        .$promise
        .then(function (data) {
            myAdsHelperService.ads = data;
            console.log(data);
        },
        function (error) {
            $log.error(error);
        });

    $scope.callDeleteService = function () {
        myAdsHelperService.deleteAd($scope.data)
            .$promise
            .then(function (data) {
                noty({
                    text: 'Ad deleted successfully',
                    type: 'success',
                    layout: 'top',
                    timeout: 5000
                });
            },
            function (error) {
                $log.error(error);
                noty({
                    text: 'Problem deleting ad',
                    type: 'error',
                    layout: 'top',
                    timeout: 5000
                });
            });
    };

    // Add css
    $scope.adImageStyle = 'ad-image-style';
});