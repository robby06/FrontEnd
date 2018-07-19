(function () {
    'use strict';
    var App = window.App || {};
    var Validation = {
        //This method will test an email address against a regular
//expression and return true or false
    isCompanyEmail: function (email) {
    return /.+@bignerdranch\.com$/.test(email);
    }
    };
    App.Validation = Validation;
    window.App = App;
    })(window);