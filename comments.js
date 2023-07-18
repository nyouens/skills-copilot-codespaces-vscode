// Create web server

// Import dependencies
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// Import routes
const comments = require('./routes/comments');

// Create express app
const app = express();

// Add middleware
app.use(cors());
app.use(bodyParser.json());

// Add routes
app.use('/comments', comments);

// Start server
const port = 3000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});