(function (window) {
    'use strict';
    var App = window.App || {};
    var $ = window.jQuery;

    function RemoteDataStore(url) {
    if (!url) {
    throw new Error('No remote URL supplied.');
    }
    this.serverUrl = url;
    }

    //sending data to the server
    RemoteDataStore.prototype.add = function (key, val) {
    //sends a POST request in the background as an XMLHttpRequest object    
    $.post(this.serverUrl, val, function (serverResponse) {
        console.log(serverResponse);
        });
//testing:
/*
var remoteDS = new App.RemoteDataStore
("http://coffeerun-v2-rest-api.herokuapp.com/api/coffeeorders");

then invoke its add method by passing some test data
remoteDS.add('a@b.com', {emailAddress: 'a@b.com', coffee: 'espresso'});
*/

//Removing data from the server
RemoteDataStore.prototype.getAll = function (cb) {
    // Code will go here
    $.get(this.serverUrl, function (serverResponse) {
    console.log(serverResponse);
    //adding a callback argument
    cb(serverResponse);
    });
};

RemoteDataStore.prototype.get = function (key, cb) {
    $.get(this.serverUrl + '/' + key, function (serverResponse) {
    console.log(serverResponse);
    cb(serverResponse);
    });
        };

        //Using jQuery’s $.ajax method
        RemoteDataStore.prototype.remove = function (key) {
            $.ajax(this.serverUrl + '/' + key, {
            type: 'DELETE'
            });
            };
        };
    App.RemoteDataStore = RemoteDataStore;
    window.App = App;
    })(window);