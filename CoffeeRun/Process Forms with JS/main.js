//creating truck instance
(function (window) {
    'use strict';
    var FORM_SELECTOR = '[data-coffee-order="form"]';//using FormHandler
    var App = window.App;
    var Truck = App.Truck;
    var DataStore = App.DataStore;
    var FormHandler = App.FormHandler;//local variable called FormHandler and assign it to App.FormHandler.
    var myTruck = new Truck('ncc-1701', new DataStore());
    window.myTruck = myTruck;
    //ensure that the instance of FormHandler will work with the DOM element
//matching that selector.
    var formHandler = new FormHandler(FORM_SELECTOR);
    //Registering createOrder as a submit handler
formHandler.addSubmitHandler(myTruck.createOrder.bind(myTruck));
console.log(formHandler);
    })(window);
    //testing
    /*
myTruck.createOrder({ emailAddress: 'me@goldfinger.com', coffee: 'double mocha'});
myTruck.createOrder({ emailAddress: 'dr@no.com', coffee: 'decaf'});
myTruck.createOrder({ emailAddress: 'm@bond.com', coffee: 'earl grey'});
myTruck.printOrders();
myTruck.deliverOrder('dr@no.com');
myTruck.deliverOrder('m@bond.com');
myTruck.printOrders();
    */