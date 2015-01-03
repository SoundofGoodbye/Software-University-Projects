adApplication.controller('HomeController', function ($scope, $log, listAdService, headerService) {
    listAdService.getAllAds()
        .$promise
        .then(function (data) {
            $scope.ads = data.ads;
        }, function (error) {
            $log.error(error);
        });
    $scope.adImage = "ad-image-style";
    $scope.adContent = "ad-content-style";
    $scope.adContainerStyle = "ad-container-style";

    headerService.setHeader('Ads - Home');
});