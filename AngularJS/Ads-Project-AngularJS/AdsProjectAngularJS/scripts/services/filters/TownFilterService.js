adApplication.factory('townFilterService', function ($resource, $http) {
    var towns;
    var selectedTownId;

    var resource = $resource('http://softuni-ads.azurewebsites.net/api/towns',
        {
            getAllTowns: {method: 'GET', isArray: true}
        });


    function getTowns() {
        return towns;
    }

    function setTowns(towns) {
        this.towns = towns;
    }

    function getSelectedTownId() {
        return this.selectedTownId;
    }

    function setSelectedTownId(selectedTownId) {
        this.selectedTownId = selectedTownId;
    }

    function getAllTowns() {
        return resource.query();
    }

    return {
        getAllTowns: getAllTowns,
        get: getTowns,
        set: setTowns,
        getSelectedTownId: getSelectedTownId,
        setSelectedTownId: setSelectedTownId
    };
});