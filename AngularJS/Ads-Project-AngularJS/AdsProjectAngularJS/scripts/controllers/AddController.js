adApplication.controller('AddController', function ($scope, $location, $log, addService, headerService, townFilterService, categoryFilterService) {
    $scope.townData = townFilterService;
    $scope.catData = categoryFilterService;
    $scope.imageDataUrl = null;

    $scope.callAddService = function () {
        var ad = {
            title: $scope.title,
            text: $scope.text,
            imageDataUrl: $scope.imageDataUrl,
            categoryId: $scope.catData.getSelectedCatId(),
            townId: $scope.townData.getSelectedTownId()
        };

        addService.callAdd(ad)
            .$promise
            .then(function (data) {
                noty({
                    text: 'Advertisement submitted for approval. Once approved, it will be published.',
                    type: 'success',
                    layout: 'top',
                    timeout: 5000
                });
                $location.path('/');
            },
            function (error) {
                noty({
                    //TODO: Fix error display.
                    text: error.responseJSON,
                    type: 'error',
                    layout: 'top',
                    timeout: 5000
                });
            });
    };

    $scope.fileSelected = function(fileInputField) {
        var file = fileInputField.files[0];
        if (file.type.match(/image\/.*/)) {
            var reader = new FileReader();
            reader.onload = function() {
                $scope.imageDataUrl = reader.result;
                $(".image-box").html("<img src='" + reader.result + "'>");
            };
            reader.readAsDataURL(file);
        } else {
            $(".image-box").html("<p>File type not supported!</p>");
        }
    };

    // Add css
    $scope.adImageStyle = 'ad-image-style';
    /**
     * Change the header title.
     */
    headerService.setHeader('Publish new add');
});