adApplication.controller('HomeController', function ($scope, $log, headerService, helperService) {
    /**
     * Default setting to 10 items total.
     * @type {number}
     */
    $scope.currentPage = 1;
    $scope.numPerPage = 2;
    $scope.maxVisiblePages = 5;
    $scope.shouldHaveFirstLastButtons = true;
    $scope.data = helperService;
    helperService.pageNum = 1;

    helperService.getHelperAds()
        .$promise
        .then(function (data) {
            helperService.ads = data.ads;
            helperService.totalItems = data.numItems;
            helperService.numPages = data.numPages;
        });

    $scope.setPage = function (pageNo) {
        $scope.currentPage = pageNo;
    };

    $scope.pageChanged = function () {
        helperService.pageNum = $scope.currentPage;
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