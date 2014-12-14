/**
 * Created by marto on 13.12.2014 г..
 */
var app = app || {};

app.controller = (function () {

    function Controller(data) {
        this._data = data;
    }

    Controller.prototype.attachEventHandlers = function (selector) {
        attachRegisterButtonEvent.call(this, selector);
        attachLoginButtonEvent.call(this, selector);
        attachAddBookmarkButtonEvent.call(this, selector);
    };

    function attachRegisterButtonEvent(selector) {
        var _this = this;
        $(selector).on('click', '#register-btn', function () {
            var username = $('#username').val();
            var password = $('#password').val();
            _this._data.users.register(username, password)
                .then(function (data) {
                    _this.loadLogin(selector);
                    noty({
                        text: 'Registration successfull.',
                        type: 'success',
                        layout: 'center',
                        timeout: 5000
                    });
                },
                function (error) {
                    displayError(error);
                });
        });
    }

    function attachLoginButtonEvent(selector) {
        var _this = this;
        $(selector).on('click', '#login-btn', function () {
            var username = $('#username').val();
            var password = $('#password').val();

            _this._data.users.login(username, password)
                .then(function (data) {
                    window.history.replaceState('Bookmarks', 'Bookmarks', '#/bookmark');
                    _this.loadBookmark(selector);
                    noty({
                        text: 'Log in  successfully.',
                        type: 'success',
                        layout: 'center',
                        timeout: 5000
                    });
                },
                function (error) {
                    displayError(error);
                });
        });
    }

    function attachAddBookmarkButtonEvent(selector) {
        var _this = this;
        $(selector).on('click', '#add-bookmark-btn', function () {
            var title = $('#bookmark-title').val();
            var url = $('#bookmark-url').val();
            _this._data.bookmarks.add(title, url)
                .then(function (data) {
                //TODO:
                },
                function (error) {
                    displayError(error);
                });
        });
    }

    Controller.prototype.loadHome = function (selector) {
        $(selector).load('./partialHTML/home.html');
    };

    Controller.prototype.loadLogin = function (selector) {
        $(selector).load('./partialHTML/login.html');
    };

    Controller.prototype.loadRegister = function (selector) {
        $(selector).load('./partialHTML/register.html');
    };

    Controller.prototype.loadBookmark = function (selector) {
        this._data.bookmarks.getAll()
            .then(function (data) {
                $.get('./partialHTML/bookmark.html', function (template) {
                    var template = Mustache.render(template, data);
                    $(selector).html(template);
                });
            },
            function (error) {
                displayError(error);
            });
    };


    function displayError(error) {
        noty({
            text: error.responseJSON.error,
            type: 'error',
            layout: 'center',
            timeout: 5000
        });
    }

    return {
        get: function (data) {
            return new Controller(data);
        }
    };
}());