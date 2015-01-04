adApplication.controller('MyPaginationController', function ($scope, $log, paginationService) {

    /**
     * Default setting to 10 items total.
     * @type {number}
     */
    $scope.totalItems = 10;
    $scope.currentPage = 1;
    $scope.numPerPage = 2;
    $scope.ads = [];

    paginationService.callCurrentPageAds($scope.currentPage)
        .$promise
        .then(function (data) {
            $scope.ads = data.ads;
            $scope.totalItems = data.numItems;
        });

    $scope.setPage = function (pageNo) {
        $scope.currentPage = pageNo;
    };

    $scope.pageChanged = function () {
        paginationService.callCurrentPageAds($scope.currentPage)
            .$promise
            .then(function (data) {
                $scope.ads = data.ads;
            });
    };

    /**
     * Calculate the number of pages based on the total items and the items per page.
     * @returns {number}
     */
    $scope.numPages = function () {
        return Math.ceil($scope.totalItems / $scope.numPerPage);
    };

    $scope.$watch('currentPage + numPerPage', function () {

    });

    $scope.maxSize = 5;
    $scope.bigTotalItems = 175;
    $scope.bigCurrentPage = 1;
});