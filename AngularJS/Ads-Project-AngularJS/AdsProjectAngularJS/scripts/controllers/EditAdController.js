adApplication.controller('EditAdController', function ($scope, $routeParams, headerService, myAdsHelperService, townFilterService, categoryFilterService) {
    $scope.adId = $routeParams.param;
    $scope.data = myAdsHelperService;
    $scope.townData = townFilterService;
    $scope.catData = categoryFilterService;

    myAdsHelperService.getAdById($scope.adId)
        .$promise
        .then(function (data) {
            console.log(data);
            myAdsHelperService.ads = data;
        },
        function (error) {
            //TODO: Error
        });


    $scope.callEditService = function () {
        var ad = {
            id: $scope.data.ads.id,
            title: $scope.data.ads.title,
            text: $scope.data.ads.text
           /* imageDataUrl: $scope.data.ads.imageDataUrl,
            categoryId: $scope.catData.getSelectedCatId(),
            townId: $scope.townData.getSelectedTownId()*/
        };

        myAdsHelperService.editAd(ad)
            .$promise
            .then(function (data) {
                console.log(data);
            },
            function (error) {
                console.log(error);            });
    };

    headerService.setHeader('Ads – Edit Ad');
});