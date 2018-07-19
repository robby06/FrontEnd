(function (window) {
    'use strict';
    var App = window.App || {};
    function Truck(truckId, db) {
        this.truckId = truckId;
        this.db = db;
        }


//When method is called, instance wil interact with its db property
//through ds methods declared earlier
        Truck.prototype.createOrder = function (order) {
            console.log('Adding order for ' + order.emailAddress);
            this.db.add(order.emailAddress, order);
            };   
        //** testing createOrder
        /*
var myTruck = new App.Truck('007', new App.DataStore());
myTruck.createOrder({ emailAddress: 'dr@no.com', coffee: 'decaf'});
myTruck.createOrder({ emailAddress: 'me@goldfinger.com', coffee: 'double mocha'});
myTruck.createOrder({ emailAddress: 'm@bond.com', coffee: 'earl grey'});
myTruck.db;

        */
//Removing orders
       Truck.prototype.deliverOrder = function (customerId) {
        console.log('Delivering order for ' + customerId);
        this.db.remove(customerId);
        }
//testing
/*
var myTruck = new App.Truck('007', new App.DataStore());
myTruck.createOrder({ emailAddress: 'm@bond.com', coffee: 'earl grey'});
myTruck.createOrder({ emailAddress: 'dr@no.com', coffee: 'decaf'});
myTruck.createOrder({ emailAddress: 'me@goldfinger.com', coffee: 'double mocha'});
myTruck.db;
myTruck.deliverOrder('m@bond.com');
myTruck.deliverOrder('dr@no.com');
myTruck.db;

*/
//This method will get an
//array of all of the customer email addresses, iterate through the array, and console.log the order
//information.
Truck.prototype.printOrders = function () {
    var customerIdArray = Object.keys(this.db.getAll());
    console.log('Truck #' + this.truckId + ' has pending orders:');
    customerIdArray.forEach(function (id) {
    console.log(this.db.get(id));
    } .bind(this));//Setting the value of this with bind
    };
//notes:
/*
The bind method accepts an object argument and returns a new version of the function. When you call
the new version, it will use the object argument passed in to bind as the value of this inside of the
function’s body.
*/
    //Testing
    /*
var myTruck = new App.Truck('007', new App.DataStore());
myTruck.createOrder({ emailAddress: 'm@bond.com', coffee: 'earl grey'});
myTruck.createOrder({ emailAddress: 'dr@no.com', coffee: 'decaf'});
myTruck.createOrder({ emailAddress: 'me@goldfinger.com', coffee: 'double mocha'});
myTruck.printOrders();
    */


    App.Truck = Truck;
    window.App = App;
    })(window);