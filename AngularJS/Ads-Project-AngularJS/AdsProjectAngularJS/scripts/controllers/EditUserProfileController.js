adApplication.controller('EditUserProfileController', function ($scope, headerService, townFilterService, userService) {
    $scope.data = townFilterService;

    townFilterService.getAllTowns()
        .$promise
        .then(function (data) {
            console.log(data);
            townFilterService.towns = data;
        });

    $scope.callUpdateProfileService = function () {
        var user = {
            name: $scope.name,
            email: $scope.email,
            phone: $scope.phone,
            town: $scope.data.selectedTownId
        };

        userService.updateUser()
            .$promise
            .then(function (data) {
                noty({
                    text: "User profile successfully updated.",
                    type: "success",
                    layout: "top",
                    timeout: 5000
                });
            },
            function (error) {
                noty({
                    text: "Error while updating user profile.",
                    type: "error",
                    layout: "top",
                    timeout: 5000
                });
            });

    };

    $scope.callChangePasswordService = function () {

        if ($scope.newPassword !== $scope.confirmPassword) {
            noty({
                text: 'Passwords must match',
                type: 'error',
                layout: 'top',
                timeout: 5000
            });

            return;
        }

        var pass = {
            oldPassword: $scope.oldPassword,
            newPassword: $scope.newPassword,
            confirmPassword: $scope.confirmPassword
        };

        userService.changePassword(pass)
            .$promise
            .then(function (data) {
                console.log(data);
            },
            function (error) {
                noty({
                    text: 'Problem while changing password.',
                    type: 'error',
                    layout: 'top',
                    timeout: 5000
                });
            });

    };

    headerService.setHeader('Ads –Edit User Profile');
});