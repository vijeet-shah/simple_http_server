const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello, World!');
  }
});

const port = 4000;
server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
