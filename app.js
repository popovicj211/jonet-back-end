const http = require('http');
const express = require('express');
const mongoose = require('mongoose');
const cors = require("cors");


const hostname = '127.0.0.1';
const port = 3006;

const app = express();
app.use(cors());
app.use(express.json());

const connection = mongoose.connection;


mongoose.connect('mongodb://localhost/jonetdb', {useNewUrlParser: true , useUnifiedTopology: true});
connection.once( 'open', () => {
  console.log( 'MongoDB is successfully running' );
} );

const authRouter = require('./routes/authRoutes');

app.use('/api/auth', authRouter);
/*const register = require('./routes/authRoutes');
register.router;
*/


app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});


module.exports = app;