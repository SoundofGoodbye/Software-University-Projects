adApplication.controller('AddController', function ($scope, $location, $log, addService, headerService) {
	$scope.callAddService = function() {
		var ad = {
			title: $scope.title,
			text: $scope.text,
			//TODO image: $scope.image,
			category: $scope.category,
			town: $scope.town
		}
		console.log(ad);

		addService.callAdd(ad)
            .$promise
            .then(function (data) {
                noty({
                    text: 'Ad successfully published.',
                    type: 'success',
                    layout: 'top',
                    timeout: 5000
                });
                //TODO: Redirect to ad - view 
                $location.path('/');
            },
            function (error) {
                noty({
                    //TODO: Fix error display.
                    text: error.responseJSON,
                    type: 'error',
                    layout: 'top',
                    timeout: 5000
                })
            });
	};

	/**
    * Change the header title.
    */
    headerService.setHeader('Publish new add');
});