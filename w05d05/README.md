# W05D05 - Mid-term Project Kickoff

### Why?
* solidify all the things we've been learning
* encourage research into things forgotten
* similar to a real work environment
* real life experience
* collaboration and communication (remotely)
* be given a boilerplate to implement
* focus is on the process more than the final product
* self-evaluate (show areas for improvement)
* only learning from a script so far

### Pick a Project

### User Stories
* describes how a user will interact with the app
* As a _____, I can _____, because ______
* As a logged-in user, I can add a contribution to an existing story, because I'd like to express my creativity

* As a logged-in user, I can create a map, because I'd like to share interesting things in my area

* As a non-logged-in user, I cannot put a pin on a map, because it doesn't belong to me

planning/user-stories.md

### Nouns === Resources
* each resource gets a table
* build out the ERD
* whiteboard and marker, diagrams.net

planning/erdv1.png
planning/erd-stretch.png

### Routes
* BREAD routes for each table
* RESTful conventions
* naming convention for routes

B GET   /dinosaurs
R GET   /dinosaurs/:id
E POST  /dinosaurs/:id
A POST  /dinosaurs
D POST  /dinosaurs/:id/delete

B GET     /dinosaurs
R GET     /dinosaurs/:id
E PATCH   /dinosaurs/:id
A POST    /dinosaurs
D DELETE  /dinosaurs/:id

planning/routes.md

### What are we building?
* MVP - Minimum Viable Product
* @KV - Minimum Viable Demo (MVD)
* If you're not going to show it, don't build it

### User Login
* Please don't do it

/login/5

```js
app.get('/login/:userId', (req, res) => {
  // set the encrypted cookies
  req.session.userId = req.params.userId;

  // plain-text cookie
  res.cookie('userId', req.params.userId);

  // send the user somewhere
  res.redirect('/');
});
```

### Tech Choices
* Back End - Node, Express, Postgres, EJS
* Front End - HTML, CSS, JS, jQuery, bootstrap, css grid, flexbox

### SPA vs Multi-page
* not mutually exclusive
* React - SPA
* Rails - MPA

### Do not code on master/main

### Splitting up the work
* vertical - every member is working on a diff layer
* horizontal - every member is working on the same layer
* pair programming

### Communication 
* the hardest thing about the project














