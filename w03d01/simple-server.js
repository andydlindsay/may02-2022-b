const http = require('http');
const port = 3000;

const server = http.createServer();

// app.get('/home', (request, response) => {});

server.on('request', (request, response) => {
  console.log('request', request.method, request.url);

  // GET /home
  if (request.url === '/home') {
    response.write('<h1>welcome to our webpage</h1>');
  }
  
  // GET /about
  if (request.url === '/about') {
    response.write('<h1>This is the about page</h1>');
  }

  response.statusCode = 201;
  response.end();
});

server.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});
