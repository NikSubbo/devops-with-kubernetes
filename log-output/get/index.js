const fs = require("fs");
const path = require("path");

const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

const filesDir = path.join(__dirname, "files");
const logFile = path.join(filesDir, "log.txt");
const pingpongFile = path.join(filesDir, "pingpong.txt");

app.get("/", (req, res) => {
  let logs = "No logs yet";
  let count = 0;

  if (fs.existsSync(logFile)) {
    logs = fs.readFileSync(logFile, "utf8");
  }

  if (fs.existsSync(pingpongFile)) {
    count = fs.readFileSync(pingpongFile, "utf8");
  }

  res.send(`${logs}\nPing / Pongs: ${count}`);
});

app.listen(port, () => {
  console.log(`Server started in port ${port}`);
});
