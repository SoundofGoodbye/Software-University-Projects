adApplication.controller('CategoryFilterController', function ($scope, $log, categoryFilterService) {
    categoryFilterService.getAllCategories()
        .$promise
        .then(function (data) {
            $scope.categories = data;
        },
        function (error) {
            $log.error(error);
        });
});