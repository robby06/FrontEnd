//the basic IIFE (immediately invoked function expression) for your module structure
(function (window) {
    'use strict';
    var App = window.App || {};
    var Promise = window.Promise;//creating promise

    function DataStore() {
    //The job of a constructor is to create and customize a new object.
    this.data = {};
    }

    //Promise-ifying the other DataStore methods
    function promiseResolvedWith(value) {
        var promise = new Promise(function (resolve, reject) {
        resolve(value);
        });
        return promise;
        }

    DataStore.prototype.add = function (key, val) {
       
        //2 ARGUMENTS
        /*
The resolve function is invoked to change the state of the Promise object
to fulfilled. The reject function is invoked to change the state of the Promise object to rejected.

        */
       return promiseResolvedWith(null);
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
        return promiseResolvedWith(this.data[key]);
            };

        DataStore.prototype.getAll = function () {
return promiseResolvedWith(this.data);
        };//returns reference to the data property
        
        DataStore.prototype.remove = function (key) {
            delete this.data[key];
            return promiseResolvedWith(null);
            };
     // ****It can store data, provide stored data in response to queries, and delete
//unnecessary data on command.

    App.DataStore = DataStore;
    window.App = App;
    })(window);