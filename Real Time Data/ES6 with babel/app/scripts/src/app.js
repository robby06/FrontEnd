//export from the ws.client.js
import socket from './ws-client';

class ChatApp {
    //constructor is a method that is run any time you create a new instance
    //constructor will set values for properties belonging to the instance.
    constructor() {
        // call the socket init with the url of my test environment aka local host (WS server)
        socket.init('ws://localhost:3001');   
        //sending and echoing a message
        socket.registerOpenHandler(() => {
            let message = new ChatMessage({ message: 'pow!' });
            socket.sendMessage(message.serialize());
            });
            socket.registerMessageHandler((data) => {
            console.log(data);
            });
     }
    }
    //test code using command below
    //babel app/scripts/src/app.js -o app/scripts/dist/main.js

    //class to represent individual chat messages
    class ChatMessage {
        constructor({
        message: m,
        user: u='batman',
        timestamp: t=(new Date()).getTime()
        }) {
            this.message = m;
            this.user = u;
            this.timestamp = t;
        }
        //serialize method in app.js to represent the data in ChatMessage’s properties as a plain
        //JavaScript object.
        serialize() {
        return {
        user: this.user,
        message: this.message,
        timestamp: this.timestamp
        };
        }
        }
    //exporting chatApp classes rather than simply creating an instance
    export default ChatApp;