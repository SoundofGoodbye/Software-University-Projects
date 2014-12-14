/**
 * Created by marto on 13.12.2014 г..
 */
var app = app || {};

app.data = (function () {

    function Data(baseUrl, ajaxRequester) {
        this.users = new Users(baseUrl, ajaxRequester);
        this.bookmarks = new Bookmarks(baseUrl, ajaxRequester, credentials.getUserId());
    }

    var credentials = (function () {
        var headers = {
            'X-Parse-Application-Id': 'e6qFWqvaH1NvzBOluxn5yqMMkSioABmcLsNr1unK',
            'X-Parse-REST-API-Key': 'drBiopT6w0n4bgykmXcCz3oYnkY5nhp14llZWNYH',
            'X-Parse-Session-Token': getSessionToken()
        };

        function getSessionToken() {
            return localStorage.getItem('sessionToken');
        }

        function setSessionToken(sessionToken) {
            return localStorage.setItem('sessionToken', sessionToken);
        }

        function getUsername() {
            return localStorage.getItem('username');
        }

        function setUsername(username) {
            localStorage.setItem('username', username);
        }

        function getHeaders() {
            return headers;
        }

        function setUserId(userId) {
            localStorage.setItem('userId', userId);
        }

        function getUserId() {
            localStorage.getItem('userId');
        }

        return {
            getSessionToken: getSessionToken,
            setSessionToken: setSessionToken,
            setUsername: setUsername,
            getHeaders: getHeaders,
            setUserId: setUserId,
            getUserId: getUserId
        };
    }());

    var Users = (function () {
        function Users(baseUrl, ajaxRequester) {
            this._serviceUrl = baseUrl;
            this._ajaxRequester = ajaxRequester;
        }

        Users.prototype.register = function (username, password) {
            var url = this._serviceUrl + 'users';
            var userData = {
                "username": username,
                "password": password
            };
            return this._ajaxRequester.post(url, userData, credentials.getHeaders())
                .then(function (data) {
                    credentials.setSessionToken(data.sessionToken);
                    return data;
                });
        };

        Users.prototype.login = function (username, password) {
            var url = this._serviceUrl + 'login/?username=' + username + "&password=" + password;
            return this._ajaxRequester.get(url, credentials.getHeaders())
                .then(function (data) {
                    credentials.setSessionToken(data.sessionToken);
                    credentials.setUsername(data.username);
                    credentials.setUserId(data.objectId);
                    return data;
                });
        };

        return Users;
    }());

    var Bookmarks = (function () {
        function Bookmarks(baseUrl, ajaxRequester, userId) {
            this._serviceUrl = baseUrl + 'classes/Bookmark';
            this._ajaxRequester = ajaxRequester;
            this._userId = userId;
        }

        Bookmarks.prototype.getAll = function () {
            return this._ajaxRequester.get(this._serviceUrl, credentials.getHeaders());
        };

        Bookmarks.prototype.add = function (title, url) {
            var userId = this._userId;
            var bookmark = {
                "ACL": {
                    userId: {
                        "write": true, "read": true
                    }
                },
                title: title,
                url: url
            };

            this._ajaxRequester.post(this._serviceUrl, bookmark, credentials.getHeaders());
        };

        return Bookmarks;
    }());

    return {
        get: function (baseUrl, ajaxRequester) {
            return new Data(baseUrl, ajaxRequester);
        }
    };
}());