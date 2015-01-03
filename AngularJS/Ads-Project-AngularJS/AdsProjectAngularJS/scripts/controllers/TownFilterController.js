adApplication.controller('TownFilterController', function ($scope, $log, townFilterService) {
    townFilterService.getAllTowns()
        .$promise
        .then(function (data) {
            $scope.towns = data;
        }, function (error) {
            $log.error(error);
        });
});