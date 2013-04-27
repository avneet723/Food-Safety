var connect = require('connect');
connect.createServer(connect.static(__dirname + "/build/release")).listen(8080);
