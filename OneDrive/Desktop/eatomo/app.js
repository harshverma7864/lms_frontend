const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const port = 3000;
const userRoutes = require('./src/routes/userRoutes');
const mainRoutes = require('./src/routes/mainroutes');

// Middleware to parse JSON requests
app.use(bodyParser.json());

// User routes
app.use('/api/users', userRoutes);


app.use('/', mainRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
