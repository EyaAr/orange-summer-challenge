const express = require('express');
const connectDB = require('./config/db');
const http = require('http');
const cors = require('cors');
const app = express();

const server = http.createServer(app);


connectDB();
app.use('/auth', require('./src/routes/auth'));
app.use('/User',require('./src/routes/User'));
app.use('/Item',require('./src/routes/Item'));



server.listen(process.env.PORT || 3000, () =>
  console.log(`Server has started on.`)
);