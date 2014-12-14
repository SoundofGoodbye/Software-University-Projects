/**
 * Created by marto on 9.12.2014 г..
 */

var app = app || {};

app.data = (function () {
    function Data(baseUrl, ajaxRequester) {
        this.users = new Users(baseUrl, ajaxRequester);
        this.bookmarks = new Bookmarks(baseUrl, ajaxRequester);
        this.credentials = credentials;
    }

    var credentials = (function () {
        var headers = {
            'X-Parse-Application-Id': 'e6qFWqvaH1NvzBOluxn5yqMMkSioABmcLsNr1unK',
            'X-Parse-REST-API-Key': 'drBiopT6w0n4bgykmXcCz3oYnkY5nhp14llZWNYH',
            'X-Parse-Session-Token': getSessionToken()
        };

        function setSessionToken(sessionToken) {
            localStorage.setItem('sessionToken', sessionToken);
        }

        function getSessionToken() {
            return localStorage.getItem('sessionToken');
        }

        function setUsername(username) {
            localStorage.setItem('username', username);
        }

        function getUsername() {
            localStorage.getItem('username');
        }

        function getHeaders() {
            return headers;
        }

        return {
            getSessionToken: getSessionToken,
            setSessionToken: setSessionToken,
            getUsername: getUsername,
            setUsername: setUsername,
            getHeaders: getHeaders
        }
    }());


    var Users = (function (baseUrl, ajaxRequester) {
        function Users(baseUrl, ajaxRequester) {
            this._serviceUrl = baseUrl;
            this._ajaxRequester = ajaxRequester;
        };

        Users.prototype.login = function (username, password) {
            var loginUrl = this._serviceUrl + 'login?username=' + username + '&password=' + password;
            return this._ajaxRequester.get(loginUrl, credentials.getHeaders())
                .then(function (data) {
                    credentials.setUsername(data.username);
                    credentials.setSessionToken(data.sessionToken);
                    return data;
                }, function (error) {
                    noty({
                        text: error.responseJSON.error,
                        type: 'error',
                        layout: 'center',
                        timeout: 5000
                    });
                    return error;
                });
        };

        Users.prototype.logout = function () {
            localStorage.removeItem('sessionToken');
        };

        Users.prototype.register = function (username, password) {
            var registerUrl = this._serviceUrl + 'users';
            var userData = {
                "username": username,
                "password": password
            };
            return this._ajaxRequester.post(registerUrl, userData, credentials.getHeaders())
                .then(function (data) {
                    credentials.setSessionToken(data.sessionToken);
                    return data;
                },
                function (error) {
                    noty({
                        text: error.responseJSON.error,
                        type: 'error',
                        layout: 'center',
                        timeout: 5000
                    });
                    return error;
                });
        };

        return Users;
    }());

    var Bookmarks = (function () {
        function Bookmarks(baseUrl, ajaxRequester) {
            this._serviceUrl = baseUrl + 'classes/Bookmark';
            this._ajaxRequester = ajaxRequester;
            this._headers = credentials.getHeaders();
        }

        Bookmarks.prototype.getAll = function () {
            console.log(this._headers);
            return this._ajaxRequester.get(this._serviceUrl, this._headers);
        };

        Bookmarks.prototype.add = function (bookmarkTitle, bookmarkUrl) {
            //"ACL":{"user_оbjectId":{"write":true,"read":true}}
            var bookmarkData = {
                "ACL": {
                    "urMaZ6bMdg": {
                        "read": true,
                        "write": true
                    }
                },
                title: bookmarkTitle,
                url: bookmarkUrl
            };
            return this._ajaxRequester.post(this._serviceUrl, bookmarkData, this._headers)
                .then(function (data) {
                    noty({
                        text: "Successfully added bookmark.",
                        type: 'success',
                        layout: 'center',
                        timeout: 5000
                    });
                    return data;
                });
        };

        Bookmarks.prototype.remove = function (bookmarkId) {
            var url = this._serviceUrl + '/' + bookmarkId;
            return this._ajaxRequester.delete(url, this._headers);
        };

        return Bookmarks;
    }());

    return {
        get: function (baseUrl, ajaxRequester) {
            return new Data(baseUrl, ajaxRequester);
        }
    }

}());