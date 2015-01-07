adApplication.factory('addService', function ($resource, $http) {

    //TODO: Get actual user token.
    var userToken = 'AHoUiIvN4SD2c-d2Tm7cYHmTxG2tsAI5x7oM0tQio1ZneJhKROlVvF84kBOjAqK34ubqCjavYXH5EEnMHZmkeIeJi-WJ_weyzPZP9dZh8Gzwee_bl7mwy1kagh3otdiRyZXTmyRfOkiAqbB3MbSEJX_psjFd542x5k6AjIyTVW3glxJqO0FkGmnbNSCFONfG1I6clxLJrdornpVUYTIVVpcSyEAfeePh53j319u8l4gfK3JxXwUwSlsWrLoitdYar3DuFgXx4XP-q7S1EZjXg4X8utiBS121henk3dmdibGHKOf7FWoeNb7FAz-Fmetcpz-AQP9-TAvvPx38sRuCFXu-zoM7r1wey5CAJqlMi3LfRhxsR45lj-OtNJvEJWozISPERAHzJmI9_gUDBzRvrz882lMLlLA5O86iWZ3P4KmemzWp6KGD11F8L-uAslBOGO_juAb5XQi7BmCRjQi91-lC9eaa3z_4IfiyzEuknls';

    $http.defaults.headers.common.Authorization = 'Bearer ' + userToken;

    var resource = $resource(
        'http://softuni-ads.azurewebsites.net/api/user/ads',
        {
            add: {
                method: 'POST'
            }
        }
    );

    function add(ad) {
        return resource.save(ad)
    }

    return {
        callAdd: add
    }
});