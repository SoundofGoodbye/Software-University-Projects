adApplication.controller('EditAdController', function ($scope, $routeParams, $log, headerService, myAdsHelperService, townFilterService, categoryFilterService) {
    $scope.adId = $routeParams.param;
    $scope.data = myAdsHelperService;
    $scope.townData = townFilterService;
    $scope.catData = categoryFilterService;
    var shouldChangeImage = false;

    myAdsHelperService.getAdById($scope.adId)
        .$promise
        .then(function (data) {
            console.log(data);
            myAdsHelperService.ads = data;
        },
        function (error) {
            $log.error(error);
        });

    $scope.deleteImage = function () {
        $(".image-box").html('');
        //TODO: Use directive for clearing the file.
        $('#add-image').val(null);
    };

    $scope.changeImage = function () {
        shouldChangeImage = !shouldChangeImage;
        if (shouldChangeImage) {
            noty({
                text: "Image will be changed.",
                type: "success",
                layout: "top",
                timeout: 5000
            });
        } else {
            noty({
                text: "Image will not change.",
                type: "error",
                layout: "top",
                timeout: 5000
            });
        }
    };

    $scope.fileSelected = function (fileInputField) {
        var file = fileInputField.files[0];
        if (file.type.match(/image\/.*/)) {
            var reader = new FileReader();
            reader.onload = function () {
                $scope.imageDataUrl = reader.result;
                $(".image-box").html("<img src='" + reader.result + "'>");
            };
            reader.readAsDataURL(file);
        } else {
            $(".image-box").html("<p>File type not supported!</p>");
        }
    };

    $scope.callEditService = function () {
        var ad = {
            id: $scope.data.ads.id,
            title: $scope.data.ads.title,
            text: $scope.data.ads.text,
            imageDataUrl: $scope.imageDataUrl,
            changeimage: shouldChangeImage,
            categoryId: $scope.catData.getSelectedCatId(),
            townId: $scope.townData.getSelectedTownId()
        };

        myAdsHelperService.editAd(ad)
            .$promise
            .then(function (data) {
                noty({
                    text: "ReservedAdvertisement edited. Don't forget to submit it for publishing.",
                    type: "success",
                    layout: "top",
                    timeout: 5000
                });
            },
            function (error) {
                $log.error(error);
            });
    };

    // Add css
    $scope.adImageStyle = 'ad-image-style';

    headerService.setHeader('Ads – Edit Ad');
});