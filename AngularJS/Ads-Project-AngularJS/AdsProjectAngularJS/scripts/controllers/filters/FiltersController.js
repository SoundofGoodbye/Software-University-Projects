adApplication.controller('FiltersController', function ($scope, $log, filterService, helperService) {

    $scope.filterCategory = function (categoryId) {
        helperService.categoryId = categoryId;

        filterData();
    };

    $scope.filterTown = function (townId) {
        helperService.townId = townId;

        filterData();
    };

    function getHelperAds() {
        helperService.getHelperAds();
    }

    function filterData() {
        helperService.getHelperAds()
            .$promise
            .then(function (data) {
                helperService.ads = data.ads;
                helperService.totalItems = data.numItems;
                helperService.numPages = data.numPages;
            },
            function (error) {
                $log.error(error);
            });
    }
});