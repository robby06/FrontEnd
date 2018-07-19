//the basic IIFE (immediately invoked function expression) for your module structure
(function (window) {
    'use strict';
    var App = window.App || {};

    function DataStore() {
    //The job of a constructor is to create and customize a new object.
    this.data = {};
    }

    DataStore.prototype.add = function (key, val) {
        this.data[key] = val;
        //create instance of datastore in console and use add method
        /*
var ds = new App.DataStore();
ds.add('email', 'q@bond.com');
ds.add('order', 'triple espresso');
ds.data;
        */
        };

    //adding methids to the constructor
    DataStore.prototype.get = function (key) {
        return this.data[key];
        };
        DataStore.prototype.getAll = function () {
        return this.data;
        };//returns reference to the data property
        
        DataStore.prototype.remove = function (key) {
            delete this.data[key];
            };
     // ****It can store data, provide stored data in response to queries, and delete
//unnecessary data on command.

    App.DataStore = DataStore;
    window.App = App;
    })(window);