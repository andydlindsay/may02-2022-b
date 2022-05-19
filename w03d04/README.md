# W03D04 - Security & Real World HTTP Servers

### To Do
- [x] Storing passwords
- [x] Encrypted cookies
- [x] HTTP Secure (HTTPS)
- [x] REST
- [x] More HTTP methods
- [x] Method Override [Stretch]

<div>
urlencoding
username=alice&password=secret%42
</div>

app.get(() => {

]


1. [x] plaintext passwords
2. [x] non-encrypted cookies (plaintext)
3. [x] https://localhost:8000/protected

### Hashing
* one way process
* cannot be undone
* user's password => hashing algorithm => hash


secret, password, 12345

'secret' + 'fajsdbjfabnsd'

email=a%40a.com&password=1234

### Encryption
* 2 way process
* cookieValue => res.cookie => browser - plaintext
* cookieValue => encryption algo => encrypted cookie => res.cookie => browser
* encryptedCookie => middleware unencrypted => plaintext cookie

### HTTPS
* HTTP Secure
* encrytion
* public key and private key
* transport layer security TLS

### REST
* REpresentational State Transfer
* naming convention for routes
* RESTful server/API

GET /availableusers
GET /getusersbyid

GET /login
GET /register

B GET   /dinocats
R GET   /dinocats/:id
E POST  /dinocats/:id
A POST  /dinocats
D POST  /dinocats/:id/delete

B GET     /dinocats
R GET     /dinocats/:id
E PATCH   /dinocats/:id
A POST    /dinocats
D DELETE  /dinocats/:id

### HTTP Verb Alternatives
* DELETE, PUT, PATCH
* semantic aliases for POST
* PUT - completely replace a resource
* PATCH - update a piece of a resource
* DELETE - delete a resource

### Method Override
* req.url & req.method
* POST disguise it as DELETE => req.method = 'DELETE' => route handlers => app.delete







