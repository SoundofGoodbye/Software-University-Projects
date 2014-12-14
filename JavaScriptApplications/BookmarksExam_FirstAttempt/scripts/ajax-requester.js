/**
 * Created by marto on 9.12.2014 г..
 */
var app = app || {};

app.ajaxRequester = (function () {
    function AjaxRequester() {
        this.get = makeGetRequest;
        this.post = makePostRequest;
        this.put = makePutRequest;
        this.delete = makeDeleteRequest;
    }

    var makeRequest = function (method, url, data, headers) {
        var defer = Q.defer();
        $.ajax({
            url: url,
            method: method,
            headers: headers,
            contentType: 'application/json',
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
        return makeRequest('GET', url, null, headers);
    };

    var makePostRequest = function (url, data, headers) {
        return makeRequest('POST', url, data, headers);
    };

    var makePutRequest = function (url, data, headers) {
        return makeRequest('PUT', url, data, headers);
    };

    var makeDeleteRequest = function (url, headers) {
        return makeRequest('DELETE', url, null, headers);
    };

    return {
        get: function () {
            return new AjaxRequester();
        }
    }
}());