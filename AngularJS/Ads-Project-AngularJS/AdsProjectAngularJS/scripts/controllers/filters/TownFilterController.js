adApplication.controller('TownFilterController', function ($scope, $log, townFilterService) {
    $scope.data = townFilterService;

    townFilterService.getAllTowns()
        .$promise
        .then(function (data) {
            townFilterService.set(data);
        }, function (error) {
            $log.error(error);
        });

    $scope.townContainerStyle = 'town-container-style';
});