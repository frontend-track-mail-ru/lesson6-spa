const WebSocketServer = require('ws').Server;

wss = new WebSocketServer(
    {
        port: 8080
    });
wss.on('connection', function connection(ws) {
    console.log('connected');
    ws.on('message', function incoming(message) {
        console.log('received: %s', message);
        // ws.send(message);
    });
    ws.send(JSON.stringify({
        status: 'success'
    }));
});
