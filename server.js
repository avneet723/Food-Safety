var connect = require('connect');
connect.createServer(connect.static(__dirname + "/build/release/browser-desktop")).listen(8080);
