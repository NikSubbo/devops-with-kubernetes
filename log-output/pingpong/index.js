const fs = require("fs");
const path = require("path");

const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

let count = 0;

app.get("/pingpong", (req, res) => {
  count += 1;
  res.send(`pong ${count}`);
});

app.get("/pings", (req, res) => {
  res.json({ count });
});

app.listen(port, () => {
  console.log(`Server started in port ${port}`);
});
