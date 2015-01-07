adApplication.controller('CategoryFilterController', function ($scope, $log, categoryFilterService) {
    $scope.data = categoryFilterService;

    categoryFilterService.getAllCategories()
        .$promise
        .then(function (data) {
            categoryFilterService.set(data);
        },
        function (error) {
            $log.error(error);
        });

    $scope.categoryContainerStyle = 'category-container-style';
});