/**
 * Created by marto on 18.12.2014 г..
 */

tigerApp.controller('TigerController', function ($scope) {
    $scope.tiger = {
        'Name': 'Pesho',
        'Born': 'Asia',
        'Birth_Date': '2006',
        'Live': 'Sofia Zoo'
    };

    $scope.tigerImg = {
        'imgUrl': 'http://tigerday.org/wp-content/uploads/2013/04/tiger.jpg'
    };
});

tigerApp.controller('StyleController', function ($scope) {
    $scope.infoStyleController = 'info-wrapper';
    $scope.imgStyleController = 'img-wrapper';
});