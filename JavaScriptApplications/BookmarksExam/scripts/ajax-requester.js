/**
 * Created by marto on 13.12.2014 г..
 */
var app = app || {};

app.ajaxRequester = (function () {
    function AjaxRequester() {
        this.get = makeGetRequest;
        this.post = makePostRequest;
        this.delete = makeDeleteRequest;
    }

    var makeRequest = function (url, method, data, headers) {
        var defer = Q.defer();

        $.ajax({
            method: method,
            headers: headers,
            contentType: 'application/json',
            url: url,
            data: JSON.stringify(data),
            success: function (data) {
                defer.resolve(data);
            },
            error: function (error) {
                defer.reject(error);
            }
        });

        return defer.promise;
    };

    var makeGetRequest = function (url, headers) {
        return makeRequest(url, 'GET', null, headers);
    };

    var makePostRequest = function (url, data, headers) {
        return makeRequest(url, 'POST', data, headers);
    };

    var makeDeleteRequest = function (url, headers) {
        return makeRequest(url, 'DELETE', null, headers);
    };

    return {
        get: function () {
            return new AjaxRequester();
        }
    };
}());