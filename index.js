// pemanggilan package express
const express = require("express");

// menggunakan package express
const app = express();

// set endpoint
app.get("/", function (req, res) {
  res.send("Hello World!");
});

// konfigurasi port aplikasi
const port = 5000;

app.listen(port, function () {
  console.log(`application running on port ${port}`);
});
