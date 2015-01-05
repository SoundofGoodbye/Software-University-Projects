adApplication.factory('addService', function ($resource, $http) {

    function add(ad) {
        //TODO: fix resource 
        //return resource.save(ad);
    }

    return {
        callAdd: add
    }
});