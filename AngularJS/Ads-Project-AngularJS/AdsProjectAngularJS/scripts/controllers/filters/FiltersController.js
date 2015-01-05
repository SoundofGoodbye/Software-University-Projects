adApplication.controller('FiltersController', function ($scope, $log, filterService, helperService) {

    //TODO Change to ALL as default
    $scope.categoryId = 1;
    $scope.townId = 1;

    $scope.filterCategory = function (categoryId) {
        $scope.categoryId = categoryId;

        filterData();
    };

    $scope.filterTown = function (townId) {
        $scope.townId = townId;

        filterData();
    };

    function filterData() {
        filterService.callFilter($scope.townId, $scope.categoryId)
            .$promise
            .then(function (data) {
                helperService.setAds(data.ads);
            },
            function (error) {
                $log.error(error);
            });
    }
});