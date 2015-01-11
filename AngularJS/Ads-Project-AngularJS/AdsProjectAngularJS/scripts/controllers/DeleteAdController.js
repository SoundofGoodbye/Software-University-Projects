adApplication.controller("DeleteAdController", function ($scope, $routeParams, myAdsHelperService) {
    $scope.adId = $routeParams.param;
    $scope.data = myAdsHelperService;

    myAdsHelperService.getAdById($scope.adId)
        .$promise
        .then(function (data) {
            myAdsHelperService.ads = data;
        },
        function (error) {
            $log.error(error);
        });

    $scope.callDeleteService = function () {

    };

    // Add css
    $scope.adImageStyle = 'ad-image-style';
});