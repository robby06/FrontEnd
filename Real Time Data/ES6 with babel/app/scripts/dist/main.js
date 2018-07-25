(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ws = require('./ws.client');

var _ws2 = _interopRequireDefault(_ws);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } //export from the ws.client.js


var ChatApp =
//constructor is a method that is run any time you create a new instance
//constructor will set values for properties belonging to the instance.
function ChatApp() {
    _classCallCheck(this, ChatApp);

    // call the socket init with the url of my test environment aka local host (WS server)
    _ws2.default.init('ws://localhost:3001');
    //sending and echoing a message
    _ws2.default.registerOpenHandler(function () {
        var message = new ChatMessage({ message: 'pow!' });
        _ws2.default.sendMessage(message.serialize());
    });
    _ws2.default.registerMessageHandler(function (data) {
        console.log(data);
    });
};
//test code using command below
//babel app/scripts/src/app.js -o app/scripts/dist/main.js

//class to represent individual chat messages


var ChatMessage = function () {
    function ChatMessage(_ref) {
        var m = _ref.message,
            _ref$user = _ref.user,
            u = _ref$user === undefined ? 'batman' : _ref$user,
            _ref$timestamp = _ref.timestamp,
            t = _ref$timestamp === undefined ? new Date().getTime() : _ref$timestamp;

        _classCallCheck(this, ChatMessage);

        this.user = user;
        this.message = message;
        this.timestamp = timestamp;
    }
    //serialize method in app.js to represent the data in ChatMessage’s properties as a plain
    //JavaScript object.


    _createClass(ChatMessage, [{
        key: 'serialize',
        value: function serialize() {
            return {
                user: this.user,
                message: this.message,
                timestamp: this.timestamp
            };
        }
    }]);

    return ChatMessage;
}();
//exporting chatApp classes rather than simply creating an instance


exports.default = ChatApp;

},{"./ws.client":3}],2:[function(require,module,exports){
'use strict';

var _app = require('./app');

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

new _app2.default();

},{"./app":1}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
/*

    It will have four responsibilities:
• connecting to the server
• performing initial setup when the connection is first opened
• forwarding incoming messages to their handlers
• sending outgoing messages
*/
var socket = void 0;
/*
This declaration uses a new way of defining variables in ES6 called let scoping. If you use let scoping
to declare a variable – using the keyword let instead of var – your variable will not be hoisted.
*/

//to initialize the connection
//init function connects to the ws server
function init(url) {
    socket = new WebSocket(url);
    console.log('connecting...');
}
//registerOpenHandler will accept a
//callback, assign a function to onopen, and then invoke the callback inside 
//the onopen function.

/*This is a new ES6 syntax called
an arrow function. Arrow functions are a shorthand for writing anonymous functions. Apart from being
a bit easier to write, arrow functions work exactly the same as anonymous functions.
*/
function registerOpenHandler(handlerFunction) {
    socket.onopen = function () {
        console.log('open');
        handlerFunction();
    };
}

//an interface for handling messages as they come in over your WebSockets connection.
function registerMessageHandler(handlerFunction) {
    socket.onmessage = function (e) {
        console.log.apply('message', e.data);
        var data = JSON.parse.parse(e.data);
        handlerFunction(data);
    };
}
//Send JSON string to WS server
function sendMessage(payload) {
    socket.send(JSON.stringify(payload));
}

//needs to specify what it exports
exports.default = {
    init: init,
    registerOpenHandler: registerOpenHandler,
    registerMessageHandler: registerMessageHandler,
    sendMessage: sendMessage
};

},{}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvc2NyaXB0cy9zcmMvYXBwLmpzIiwiYXBwL3NjcmlwdHMvc3JjL21haW4uanMiLCJhcHAvc2NyaXB0cy9zcmMvd3MuY2xpZW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7QUNDQTs7Ozs7OzBKQURBOzs7SUFHTSxPO0FBQ0Y7QUFDQTtBQUNBLG1CQUFjO0FBQUE7O0FBQ1Y7QUFDQSxpQkFBTyxJQUFQLENBQVkscUJBQVo7QUFDQTtBQUNBLGlCQUFPLG1CQUFQLENBQTJCLFlBQU07QUFDN0IsWUFBSSxVQUFVLElBQUksV0FBSixDQUFnQixFQUFFLFNBQVMsTUFBWCxFQUFoQixDQUFkO0FBQ0EscUJBQU8sV0FBUCxDQUFtQixRQUFRLFNBQVIsRUFBbkI7QUFDQyxLQUhMO0FBSUksaUJBQU8sc0JBQVAsQ0FBOEIsVUFBQyxJQUFELEVBQVU7QUFDeEMsZ0JBQVEsR0FBUixDQUFZLElBQVo7QUFDQyxLQUZEO0FBR04sQztBQUVGO0FBQ0E7O0FBRUE7OztJQUNNLFc7QUFDRiwrQkFJRztBQUFBLFlBSE0sQ0FHTixRQUhILE9BR0c7QUFBQSw2QkFGSCxJQUVHO0FBQUEsWUFGRyxDQUVILDZCQUZLLFFBRUw7QUFBQSxrQ0FESCxTQUNHO0FBQUEsWUFEUSxDQUNSLGtDQURXLElBQUksSUFBSixFQUFELENBQWEsT0FBYixFQUNWOztBQUFBOztBQUNILGFBQUssSUFBTCxHQUFZLElBQVo7QUFDQSxhQUFLLE9BQUwsR0FBZSxPQUFmO0FBQ0EsYUFBSyxTQUFMLEdBQWlCLFNBQWpCO0FBQ0M7QUFDRDtBQUNBOzs7OztvQ0FDWTtBQUNaLG1CQUFPO0FBQ1Asc0JBQU0sS0FBSyxJQURKO0FBRVAseUJBQVMsS0FBSyxPQUZQO0FBR1AsMkJBQVcsS0FBSztBQUhULGFBQVA7QUFLQzs7Ozs7QUFFTDs7O2tCQUNlLE87Ozs7O0FDNUNuQjs7Ozs7O0FBQ0EsSUFBSSxhQUFKOzs7Ozs7OztBQ0RBOzs7Ozs7OztBQVFBLElBQUksZUFBSjtBQUNBOzs7OztBQUtBO0FBQ0E7QUFDQSxTQUFTLElBQVQsQ0FBYyxHQUFkLEVBQW1CO0FBQ2YsYUFBUyxJQUFJLFNBQUosQ0FBYyxHQUFkLENBQVQ7QUFDQSxZQUFRLEdBQVIsQ0FBWSxlQUFaO0FBQ0M7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7Ozs7QUFJSSxTQUFTLG1CQUFULENBQTZCLGVBQTdCLEVBQThDO0FBQzFDLFdBQU8sTUFBUCxHQUFnQixZQUFNO0FBQ3RCLGdCQUFRLEdBQVIsQ0FBWSxNQUFaO0FBQ0E7QUFDQyxLQUhEO0FBSUM7O0FBRVQ7QUFDUSxTQUFTLHNCQUFULENBQWdDLGVBQWhDLEVBQWdEO0FBQzVDLFdBQU8sU0FBUCxHQUFtQixVQUFDLENBQUQsRUFBTztBQUN0QixnQkFBUSxHQUFSLENBQVksS0FBWixDQUFrQixTQUFsQixFQUE2QixFQUFFLElBQS9CO0FBQ0EsWUFBSSxPQUFPLEtBQUssS0FBTCxDQUFXLEtBQVgsQ0FBaUIsRUFBRSxJQUFuQixDQUFYO0FBQ0Esd0JBQWdCLElBQWhCO0FBQ0gsS0FKRDtBQUtIO0FBQ0Q7QUFDQSxTQUFTLFdBQVQsQ0FBcUIsT0FBckIsRUFBNkI7QUFDekIsV0FBTyxJQUFQLENBQVksS0FBSyxTQUFMLENBQWUsT0FBZixDQUFaO0FBQ0g7O0FBRUw7a0JBQ2U7QUFDWCxjQURXO0FBRVgsNENBRlc7QUFHWCxrREFIVztBQUlYO0FBSlcsQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIi8vZXhwb3J0IGZyb20gdGhlIHdzLmNsaWVudC5qc1xuaW1wb3J0IHNvY2tldCBmcm9tICcuL3dzLmNsaWVudCc7XG5cbmNsYXNzIENoYXRBcHAge1xuICAgIC8vY29uc3RydWN0b3IgaXMgYSBtZXRob2QgdGhhdCBpcyBydW4gYW55IHRpbWUgeW91IGNyZWF0ZSBhIG5ldyBpbnN0YW5jZVxuICAgIC8vY29uc3RydWN0b3Igd2lsbCBzZXQgdmFsdWVzIGZvciBwcm9wZXJ0aWVzIGJlbG9uZ2luZyB0byB0aGUgaW5zdGFuY2UuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIC8vIGNhbGwgdGhlIHNvY2tldCBpbml0IHdpdGggdGhlIHVybCBvZiBteSB0ZXN0IGVudmlyb25tZW50IGFrYSBsb2NhbCBob3N0IChXUyBzZXJ2ZXIpXG4gICAgICAgIHNvY2tldC5pbml0KCd3czovL2xvY2FsaG9zdDozMDAxJyk7ICAgXG4gICAgICAgIC8vc2VuZGluZyBhbmQgZWNob2luZyBhIG1lc3NhZ2VcbiAgICAgICAgc29ja2V0LnJlZ2lzdGVyT3BlbkhhbmRsZXIoKCkgPT4ge1xuICAgICAgICAgICAgbGV0IG1lc3NhZ2UgPSBuZXcgQ2hhdE1lc3NhZ2UoeyBtZXNzYWdlOiAncG93IScgfSk7XG4gICAgICAgICAgICBzb2NrZXQuc2VuZE1lc3NhZ2UobWVzc2FnZS5zZXJpYWxpemUoKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHNvY2tldC5yZWdpc3Rlck1lc3NhZ2VIYW5kbGVyKChkYXRhKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgICAgIH0pO1xuICAgICB9XG4gICAgfVxuICAgIC8vdGVzdCBjb2RlIHVzaW5nIGNvbW1hbmQgYmVsb3dcbiAgICAvL2JhYmVsIGFwcC9zY3JpcHRzL3NyYy9hcHAuanMgLW8gYXBwL3NjcmlwdHMvZGlzdC9tYWluLmpzXG5cbiAgICAvL2NsYXNzIHRvIHJlcHJlc2VudCBpbmRpdmlkdWFsIGNoYXQgbWVzc2FnZXNcbiAgICBjbGFzcyBDaGF0TWVzc2FnZSB7XG4gICAgICAgIGNvbnN0cnVjdG9yKHtcbiAgICAgICAgbWVzc2FnZTogbSxcbiAgICAgICAgdXNlcjogdT0nYmF0bWFuJyxcbiAgICAgICAgdGltZXN0YW1wOiB0PShuZXcgRGF0ZSgpKS5nZXRUaW1lKClcbiAgICAgICAgfSkge1xuICAgICAgICB0aGlzLnVzZXIgPSB1c2VyO1xuICAgICAgICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xuICAgICAgICB0aGlzLnRpbWVzdGFtcCA9IHRpbWVzdGFtcDtcbiAgICAgICAgfVxuICAgICAgICAvL3NlcmlhbGl6ZSBtZXRob2QgaW4gYXBwLmpzIHRvIHJlcHJlc2VudCB0aGUgZGF0YSBpbiBDaGF0TWVzc2FnZeKAmXMgcHJvcGVydGllcyBhcyBhIHBsYWluXG4gICAgICAgIC8vSmF2YVNjcmlwdCBvYmplY3QuXG4gICAgICAgIHNlcmlhbGl6ZSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgdXNlcjogdGhpcy51c2VyLFxuICAgICAgICBtZXNzYWdlOiB0aGlzLm1lc3NhZ2UsXG4gICAgICAgIHRpbWVzdGFtcDogdGhpcy50aW1lc3RhbXBcbiAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICB9XG4gICAgLy9leHBvcnRpbmcgY2hhdEFwcCBjbGFzc2VzIHJhdGhlciB0aGFuIHNpbXBseSBjcmVhdGluZyBhbiBpbnN0YW5jZVxuICAgIGV4cG9ydCBkZWZhdWx0IENoYXRBcHA7IiwiaW1wb3J0IENoYXRBcHAgZnJvbSAnLi9hcHAnO1xubmV3IENoYXRBcHAoKTsiLCIvKlxuXG4gICAgSXQgd2lsbCBoYXZlIGZvdXIgcmVzcG9uc2liaWxpdGllczpcbuKAoiBjb25uZWN0aW5nIHRvIHRoZSBzZXJ2ZXJcbuKAoiBwZXJmb3JtaW5nIGluaXRpYWwgc2V0dXAgd2hlbiB0aGUgY29ubmVjdGlvbiBpcyBmaXJzdCBvcGVuZWRcbuKAoiBmb3J3YXJkaW5nIGluY29taW5nIG1lc3NhZ2VzIHRvIHRoZWlyIGhhbmRsZXJzXG7igKIgc2VuZGluZyBvdXRnb2luZyBtZXNzYWdlc1xuKi9cbmxldCBzb2NrZXQ7XG4vKlxuVGhpcyBkZWNsYXJhdGlvbiB1c2VzIGEgbmV3IHdheSBvZiBkZWZpbmluZyB2YXJpYWJsZXMgaW4gRVM2IGNhbGxlZCBsZXQgc2NvcGluZy4gSWYgeW91IHVzZSBsZXQgc2NvcGluZ1xudG8gZGVjbGFyZSBhIHZhcmlhYmxlIOKAkyB1c2luZyB0aGUga2V5d29yZCBsZXQgaW5zdGVhZCBvZiB2YXIg4oCTIHlvdXIgdmFyaWFibGUgd2lsbCBub3QgYmUgaG9pc3RlZC5cbiovXG5cbi8vdG8gaW5pdGlhbGl6ZSB0aGUgY29ubmVjdGlvblxuLy9pbml0IGZ1bmN0aW9uIGNvbm5lY3RzIHRvIHRoZSB3cyBzZXJ2ZXJcbmZ1bmN0aW9uIGluaXQodXJsKSB7XG4gICAgc29ja2V0ID0gbmV3IFdlYlNvY2tldCh1cmwpO1xuICAgIGNvbnNvbGUubG9nKCdjb25uZWN0aW5nLi4uJyk7XG4gICAgfVxuLy9yZWdpc3Rlck9wZW5IYW5kbGVyIHdpbGwgYWNjZXB0IGFcbi8vY2FsbGJhY2ssIGFzc2lnbiBhIGZ1bmN0aW9uIHRvIG9ub3BlbiwgYW5kIHRoZW4gaW52b2tlIHRoZSBjYWxsYmFjayBpbnNpZGUgXG4vL3RoZSBvbm9wZW4gZnVuY3Rpb24uXG5cbi8qVGhpcyBpcyBhIG5ldyBFUzYgc3ludGF4IGNhbGxlZFxuYW4gYXJyb3cgZnVuY3Rpb24uIEFycm93IGZ1bmN0aW9ucyBhcmUgYSBzaG9ydGhhbmQgZm9yIHdyaXRpbmcgYW5vbnltb3VzIGZ1bmN0aW9ucy4gQXBhcnQgZnJvbSBiZWluZ1xuYSBiaXQgZWFzaWVyIHRvIHdyaXRlLCBhcnJvdyBmdW5jdGlvbnMgd29yayBleGFjdGx5IHRoZSBzYW1lIGFzIGFub255bW91cyBmdW5jdGlvbnMuXG4qL1xuICAgIGZ1bmN0aW9uIHJlZ2lzdGVyT3BlbkhhbmRsZXIoaGFuZGxlckZ1bmN0aW9uKSB7XG4gICAgICAgIHNvY2tldC5vbm9wZW4gPSAoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdvcGVuJyk7XG4gICAgICAgIGhhbmRsZXJGdW5jdGlvbigpO1xuICAgICAgICB9O1xuICAgICAgICB9XG5cbi8vYW4gaW50ZXJmYWNlIGZvciBoYW5kbGluZyBtZXNzYWdlcyBhcyB0aGV5IGNvbWUgaW4gb3ZlciB5b3VyIFdlYlNvY2tldHMgY29ubmVjdGlvbi5cbiAgICAgICAgZnVuY3Rpb24gcmVnaXN0ZXJNZXNzYWdlSGFuZGxlcihoYW5kbGVyRnVuY3Rpb24pe1xuICAgICAgICAgICAgc29ja2V0Lm9ubWVzc2FnZSA9IChlKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cuYXBwbHkoJ21lc3NhZ2UnLCBlLmRhdGEpO1xuICAgICAgICAgICAgICAgIGxldCBkYXRhID0gSlNPTi5wYXJzZS5wYXJzZShlLmRhdGEpO1xuICAgICAgICAgICAgICAgIGhhbmRsZXJGdW5jdGlvbihkYXRhKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgLy9TZW5kIEpTT04gc3RyaW5nIHRvIFdTIHNlcnZlclxuICAgICAgICBmdW5jdGlvbiBzZW5kTWVzc2FnZShwYXlsb2FkKXtcbiAgICAgICAgICAgIHNvY2tldC5zZW5kKEpTT04uc3RyaW5naWZ5KHBheWxvYWQpKTtcbiAgICAgICAgfVxuXG4gICAgLy9uZWVkcyB0byBzcGVjaWZ5IHdoYXQgaXQgZXhwb3J0c1xuICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgaW5pdCxcbiAgICAgICAgcmVnaXN0ZXJPcGVuSGFuZGxlcixcbiAgICAgICAgcmVnaXN0ZXJNZXNzYWdlSGFuZGxlcixcbiAgICAgICAgc2VuZE1lc3NhZ2VcbiAgICAgICAgfSJdfQ==
