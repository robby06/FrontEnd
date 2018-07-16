//the basic IIFE (immediately invoked function expression) for your module structure
(function (window) {
    'use strict';
    var App = window.App || {};
    function DataStore() {
    console.log('running the DataStore function');
    //The job of a constructor is to create and customize a new object.
    this.data = {};
    }
    App.DataStore = DataStore;
    window.App = App;
    })(window);