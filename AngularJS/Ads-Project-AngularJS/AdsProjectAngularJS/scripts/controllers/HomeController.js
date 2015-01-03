adApplication.controller('HomeController', function ($scope, listAdService, headerService) {
    listAdService.getAllAds()
        .$promise
        .then(function (data) {
            $scope.ads = data.ads;
        }, function (error) {
            //TODO: Add appropriate message handler
            alert('Error while getting adds');
        });
    $scope.adImage = "ad-image-style";
    $scope.adContent = "ad-content-style";
    $scope.adContainerStyle = "ad-container-style";

    headerService.setHeader('Ads - Home');
});