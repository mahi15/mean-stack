const http = require('http');

const server = http.createServer((req, res) => {
  res.end('this is my first application nodejs');
});

server.listen(process.env.Port || 3000);
