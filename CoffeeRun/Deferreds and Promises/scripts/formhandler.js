(function (window) {
    'use strict';
    var App = window.App || {};
    var $ = window.jQuery;
    function FormHandler(selector) {
    // Code will go here
    if (!selector) {
    throw new Error('No selector provided');
    //Error is a built-in type that lets you formally signal that there is an unexpected value or condition in
//your code
    }
    this.$formElement = $(selector);
    if (this.$formElement.length === 0) {
        throw new Error('Could not find element with selector: ' + selector);
    }
}
//Adding submit handler
FormHandler.prototype.addSubmitHandler = function (fn) {
    console.log('Setting submit handler for form');
    this.$formElement.on('submit', function (event) {
        event.preventDefault();
        //extracting data
        var data =  {};
$(this).serializeArray().forEach(function (item) {
data[item.name] = item.value;
console.log(item.name + ' is ' + item.value);
});
        //serializeArray returns the form data as an array of objects.
console.log(data);
fn(data);//the callback will be invoked and will be passed whatever data the user entered into the form.
   this.reset();//you submit the form, you should see that the data is cleared out.
   this.elements[0].focus();
});
};

//listening for the input event
FormHandler.prototype.addInputHandler = function (fn) {
    console.log('Setting input handler for form');
    this.$formElement.on('input', '[name="emailAddress"]', function (event) {
    var emailAddress = event.target.value;
    var message = '';
    if (fn(emailAddress)) {
    event.target.setCustomValidity('');
    } else {
    message = emailAddress + ' is not an authorized email address!'
    event.target.setCustomValidity(message);
    }
});

    };
    App.FormHandler = FormHandler;
    window.App = App;
    })(window);