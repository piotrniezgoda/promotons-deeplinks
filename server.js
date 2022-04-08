const http = require('http');
var fs = require('fs');

const hostname = '192.168.1.23';
const port = 3000;

http.createServer(function(request, response) {
  response.writeHead(200, {'Content-Type': 'text/html'});

  var file = fs.createReadStream('index.html');
  file.pipe(response);

}).listen(3000, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`)
});

//node server.js
