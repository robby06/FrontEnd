(function (window) {
    'use strict';
    var App = window.App || {};
    var $ = window.jQuery;

    function CheckList(selector) {
    if (!selector) {
    throw new Error('No selector provided');
    }
    this.$element = $(selector);
    if (this.$element.length === 0) {
    throw new Error('Could not find element with selector: ' + selector);
    }
    }

    CheckList.prototype.addClickHandler = function (fn) {
        this.$element.on('click', 'input', function (event) {
        var email = event.target.value;
        this.removeRow(email);
        fn(email);
        }.bind(this));
        };
//creating CheckList Rows on submit
    CheckList.prototype.addRow = function (coffeeOrder) {
        // Remove any existing rows that match the email address
        this.removeRow(coffeeOrder.emailAddress);
        // Create a new instance of a row, using the coffee order info
        var rowElement = new Row(coffeeOrder);
        // Add the new row instance's $element property to the checklist
        this.$element.append(rowElement.$element);
        };

//Creating the CheckList.prototype.removeRow method
        CheckList.prototype.removeRow = function (email) {
            this.$element
            .find('[value="' + email + '"]')
            .closest('[data-coffee-order="checkbox"]')
            .remove();
            };
//creating the row constructor
/*
Row constructor will be in charge of creating all the DOM elements necessary to represent a single
coffee order, including the checkbox and text description. But the Row constructor will not be exported
to the App namespace. It will only be used internally by one of the CheckList.prototype methods.
*/
    function Row(coffeeOrder) {
        // Constructor code will go here
        var $div = $('<div></div>', {
            'data-coffee-order': 'checkbox',
            'class': 'checkbox'
            });
            var $label = $('<label></label>');

            var $checkbox = $('<input></input>', {
                type: 'checkbox',
                value: coffeeOrder.emailAddress
                });
//build a string by concatenating the email for example in order to gather pieces together
                var description = coffeeOrder.size + ' ';
if (coffeeOrder.flavor) {
description += coffeeOrder.flavor + ' ';
}
description += coffeeOrder.coffee + ', ';
description += ' (' + coffeeOrder.emailAddress + ')';
description += ' [' + coffeeOrder.strength + 'x]';
//jQuery append method to connect the elements together. This method
//accepts either a DOM element or a jQuery-wrapped collection and adds it as a child element.
$label.append($checkbox);
$label.append(description);
$div.append($label);

this.$element = $div;//make the subtree available as a property of the instance by assigning it to this.$element in
//checklist.js.
        }// note: constructors should never have a return statement in JS
    App.CheckList = CheckList;
    window.App = App;
    })(window);