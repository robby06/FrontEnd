//creating truck instance
(function (window) {
    'use strict';
    var FORM_SELECTOR = '[data-coffee-order="form"]';//using FormHandler
    var CHECKLIST_SELECTOR = '[data-coffee-order="checklist"]';
    var SERVER_URL = 'http://coffeerun-v2-rest-api.herokuapp.com/api/coffeeorders';
    var App = window.App;
    var Truck = App.Truck;
    var DataStore = App.DataStore;
    var RemoteDataStore = App.RemoteDataStore;//Replacing DataStore with RemoteDataStore
    var FormHandler = App.FormHandler;//local variable called FormHandler and assign it to App.FormHandler.
    var Validation = App.Validation;//Associating the validation check with the input event
    var CheckList = App.CheckList;
    var remoteDS = new RemoteDataStore(SERVER_URL);
    var webshim = window.webshim;
    var myTruck = new Truck('ncc-1701', new DataStore());
    window.myTruck = myTruck;
    var checkList = new CheckList(CHECKLIST_SELECTOR);
    checkList.addClickHandler(myTruck.deliverOrder.bind(myTruck));//calling addclickHandler
    //ensure that the instance of FormHandler will work with the DOM element
//matching that selector.
    var formHandler = new FormHandler(FORM_SELECTOR);
    //Registering createOrder as a submit handler
 //created a single submit handler function that invokes both createOrder and addRow. When it
//invokes them, it passes the correct value of this and the data from the form.  

//Handling failures with then
formHandler.addSubmitHandler(function (data) {
    myTruck.createOrder.call(myTruck, data)
    .then(function () {
    checkList.addRow.call(checkList, data);
    
    });
});
myTruck.printOrders(checkList.addRow.bind(checkList));// should see when reloading coffee page
//that the existing coffee orders appear in the checklist

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