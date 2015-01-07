adApplication.controller('AddController', function ($scope, $location, $log, addService, headerService, townFilterService, categoryFilterService) {
    $scope.townData = townFilterService;
    $scope.catData = categoryFilterService;

    $scope.callAddService = function () {
        var ad = {
            title: $scope.title,
            text: $scope.text,
            //TODO image: $scope.image,
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
                //TODO: Redirect to ad - view
                console.log(data);
                $location.path('/');
            },
            function (error) {
                noty({
                    //TODO: Fix error display.
                    text: error.responseJSON,
                    type: 'error',
                    layout: 'top',
                    timeout: 5000
                })
            });
    };

    // Add css
    $scope.newAdStyle = 'create-new-ad-style';
    /**
     * Change the header title.
     */
    headerService.setHeader('Publish new add');
});