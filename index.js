const express = require('express');
const mongoose = require("mongoose");
const app = express();


app.listen(3000, () => {
  console.log('Listening on port 3000');
});

app.get('/', (req, res) => {
  res.send('Hello from Node API Server Updated');
});

mongoose
  .connect(
    "mongodb+srv://urenamiguel82:WKVoi7GU1phWPU4o@backenddb.avkzj.mongodb.net/?retryWrites=true&w=majority&appName=BackendDB"
  )
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(3000, () => {
      console.log("Listening on port 3000");
    });
  })
  .catch(() => {
    console.log("Error connecting to MongoDB");
  });