/*

    It will have four responsibilities:
• connecting to the server
• performing initial setup when the connection is first opened
• forwarding incoming messages to their handlers
• sending outgoing messages
*/
let socket;
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
        socket.onopen = () => {
        console.log('open');
        handlerFunction();
        };
        }

//an interface for handling messages as they come in over your WebSockets connection.
        function registerMessageHandler(handlerFunction){
            socket.onmessage = (e) => {
                console.log.apply('message', e.data);
                let data = JSON.parse.parse(e.data);
                handlerFunction(data);
            };
        }
        //Send JSON string to WS server
        function sendMessage(payload){
            socket.send(JSON.stringify(payload));
        }

    //needs to specify what it exports
    export default {
        init,
        registerOpenHandler,
        registerMessageHandler,
        sendMessage
        }