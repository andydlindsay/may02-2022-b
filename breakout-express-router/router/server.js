require('dotenv').config();

const express = require('express');
const morgan = require('morgan');

const app = express();
const port = process.env.PORT || 3000;

app.use(morgan('dev'));

// require the db
const db = require('./db/db');

// import the routers
const productRouter = require('./routers/product-router');
const blogpostRouterFn = require('./routers/blogpost-router');

// tell Express to use the routers
app.use('/api/admin/products', productRouter);
const blogpostRouter = blogpostRouterFn(db);
app.use('/blogposts', blogpostRouter);

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
