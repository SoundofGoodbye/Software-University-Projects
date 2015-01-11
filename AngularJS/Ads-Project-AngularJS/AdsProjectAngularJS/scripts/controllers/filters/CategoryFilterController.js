adApplication.controller('CategoryFilterController', function ($scope, $log, categoryFilterService) {
    $scope.data = categoryFilterService;

    $scope.init = function(selected_cat_id)
    {
        //This function is sort of private constructor for controller
        $scope.selected_cat_id = selected_cat_id;
    };

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