const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();
const apiRoutes = require('./routes/api');


const app = express();
app.use(express.json());
app.use('./api', apiRoutes)
app.use(cors());

//for future implementation

// Serve static assets if in production
if(process.env.NODE_ENV === 'production') {
  //set static folder
  app.use(express.static('client/build'));
  app.get('*', () => (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const port = process.env.PORT || 8000;

app.listen(port, console.log(`running on port ${port}`))