/**
 * Created by marto on 9.12.2014 г..
 */

var app = app || {};

app.controller = (function () {

    function BaseController(data) {
        this._data = data;
    }

    BaseController.prototype.attachEvents = function () {
        var selector = '#wrapper';

        attachLoginButtonEvent.call(this, selector);
        attachRegisterButtonEvent.call(this, selector);
        attachAddBookmarkEvent.call(this, selector);
        attachRemoveBookmarkButtonEvent.call(this, selector);
    };

    BaseController.prototype.loadHome = function (selector) {
        $(selector).load("./partialHTML/home.html");
    };

    BaseController.prototype.loadLogin = function (selector) {
        $(selector).load("./partialHTML/login.html");
    };

    BaseController.prototype.loadRegister = function (selector) {
        $(selector).load("./partialHTML/register.html");
    };

    BaseController.prototype.loadBookmarks = function (selector) {
        var userSessionToken = this._data.credentials.getSessionToken();
        if (userSessionToken) {
            this._data.bookmarks.getAll().then(function (data) {
                $.get('./partialHTML/bookmark.html', function (template) {
                    console.log(data);
                    var output = Mustache.render(template, data);
                    $(selector).html(output);
                });
            });
        } else {
            this.loadLogin(selector);
            noty({
                text: 'You need to log in',
                type: 'error',
                layout: 'center',
                timeout: 5000
            });
        }
    };

    var attachLogoutButtonEvent = function (selector) {
        $(selector).on('click', 'logout-btn', function () {
            this._data.users.logout();
        });
    };

    var attachRemoveBookmarkButtonEvent = function (selector) {
        var _this = this;
        $(selector).on('click', '.delete-bookmark-btn', function (ev) {
            var isConfirmed = confirm("Are you sure you want to delete this bookmark?");
            if (isConfirmed) {
                var bookmarkId = $(this).attr('id');
                _this._data.bookmarks.remove(bookmarkId)
                    .then(function (data) {
                        $(ev.target).parent().remove();
                    },
                    function (error) {
                        noty({
                            text: 'Error while deleting bookmark.',
                            type: 'error',
                            layout: 'center',
                            timeout: 5000
                        });
                    });
            }
        });
    };

    var attachLoginButtonEvent = function (selector) {
        var _this = this;
        $(selector).on('click', '#login-btn', function () {
            var username = $("#username").val();
            var password = $("#password").val();
            _this._data.users.login(username, password)
                .then(function (data) {
                    window.history.replaceState('Bookmarks', 'Bookmarks', '#/bookmarks');
                    _this.loadBookmarks(selector);
                });
        });
    };

    var attachRegisterButtonEvent = function (selector) {
        var _this = this;
        $(selector).on('click', '#register-btn', function () {
            var username = $("#username").val();
            var password = $("#password").val();
            _this._data.users.register(username, password).then(function (data) {
                _this.loadLogin(selector);
            });
        });
    };

    var attachAddBookmarkEvent = function (selector) {
        var _this = this;
        $(selector).on('click', '#add-bookmark-btn', function () {
            var title = $('#bookmark-title').val();
            var url = $('#bookmark-url').val();
            _this._data.bookmarks.add(title, url)
                .then(function (data) {
                    //TODO: Append to page.
                    aler('added');
                },
                function (error) {
                    noty({
                        text: error.responseJSON.error,
                        type: 'error',
                        layout: 'center',
                        timeout: 5000
                    });
                });
        });
    };

    return {
        get: function (data) {
            return new BaseController(data);
        }
    }

}());