"use strict";
const cors = require("cors");
const express = require("express");
const app = express();
const server = require("http").Server(app);
const path = require("path");
const swaggerAutogen = require('swagger-autogen')();
const io = require('socket.io')(server);
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger.json');

const PORT = process.env.PORT || 21598;
const HOST = "0.0.0.0";

app.use(cors());

app.use((req, res, next) => {
  req.io = io;
  next();
});

app.use(require("./routes"));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

io.on('connection', sock => {
  console.log('ID: ' + sock.id)

  sock.on('event', data => {
    console.log(data)
  });
  sock.on('disconnect', () => {
    console.log(`O usuário: ${sock.id} se desconectou`)
  });
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "ApiFound", "index.html"));
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "NotFound", "index.html"));
});

server.listen(PORT, HOST);
console.log(`Server is running on http://0.0.0.0:${PORT}`);
