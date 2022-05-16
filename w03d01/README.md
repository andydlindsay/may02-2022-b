# W03D01 - Web Servers 101

### To Do
- [x] Web Servers
- [x] Express
- [x] Middleware

http://localhost:8080/u/ins21n

### Web Server
* listen for the HTTP protocol
* info that's relevant to the web: raw data, video, html, css, JS, etc


Move up!                You ded
Client <==== TCP =====> Server


Response
Client <==== TCP/HTTP ======> Server

### Request
* Two parts: verb/method and path/url
* Verb/methods: GET, POST (tells the server what we want to do)
  * GET: requesting info
  * POST: send info
* Path/url (endpoints): `/users`, `/videos`, `/urls/abcd` (what we want to do it to)

GET /users => I want to retrieve all the users please
POST /login => here's my credentials

### Response
* has to have a status code
* may or may not have a body/payload



<%= %>
<% %>

pug
jsx => React
erb
ejs

h1
  welcome to my site

<h1>welcome to my site</h1>

`${}`

```js
const net = require('net');
const port = 3000;

const server = net.createServer();

server.on('connection', (connection) => {
  connection.write('hello world');
});

server.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});
```

```js
const http = require('http');
const port = 3000;

const server = http.createServer();

server.on('request', (request, response) => {});

server.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});
```

```js
server.on('request', (request, response) => {});
button.on('click', () => {});
```


### Web Server Applications
* Express
* Restify
* Koa
* Hapi

### Middleware
* code that runs between the Request and Response
* parsing the incoming request

                                                        `req`
            next()        next()
          cookie-parser  body-parser
request => middleware => middleware => middleware => route handler => response
            req.cookies   req.body

request => route handler => response





