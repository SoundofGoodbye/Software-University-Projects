adApplication.controller('HomeController', function ($scope, $log, paginationService, headerService, helperService) {
    /**
     * Default setting to 10 items total.
     * @type {number}
     */
    $scope.totalItems = 10;
    $scope.currentPage = 1;
    $scope.numPerPage = 2;
    $scope.numPages = 0;
    $scope.maxVisiblePages = 5;
    $scope.shouldHaveFirstLastButtons = true;
    $scope.ads = [];

    paginationService.callCurrentPageAds($scope.currentPage)
        .$promise
        .then(function (data) {
            $scope.ads = data.ads;
            $scope.totalItems = data.numItems;
            $scope.numPages = data.numPages;
        });

    $scope.setPage = function (pageNo) {
        $scope.currentPage = pageNo;
    };

    $scope.pageChanged = function () {
        paginationService.callCurrentPageAds($scope.currentPage)
            .$promise
            .then(function (data) {
                $scope.ads = data.ads;
                $scope.totalItems = data.numItems;
                $scope.numPages = data.numPages;
            },
            function (error) {
                $log.error(error);
            });
    };

    $scope.getNumPages = function () {
        return $scope.numPages;
    };

    /**
     * Change the title in the header to indicate that the page changed.
     */
    headerService.setHeader('Ads - Home');

    // Add css styles.
    $scope.adImage = "ad-image-style";
    $scope.adContent = "ad-content-style";
    $scope.adContainerStyle = "ad-container-style";
});