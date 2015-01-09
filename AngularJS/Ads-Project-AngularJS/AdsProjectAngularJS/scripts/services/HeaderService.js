adApplication.factory('headerService', function () {
    var headerText = 'Default';

    function setHeader(text) {
        headerText = text;
    }

    function getHeader() {
        return headerText;
    }

    return {
        setHeader: setHeader,
        getHeader: getHeader
    };
});