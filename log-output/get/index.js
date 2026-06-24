const fs = require("fs");
const path = require("path");

const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

const logFile = path.join(__dirname, "files", "log.txt");

const logs = "No logs yet";

if (fs.existsSync(logFile)) {
  const logs = fs.readFileSync(logFile, "utf8");
}

app.get("/", (req, res) => {
  res.send(logs);
});

app.listen(port, () => {
  console.log(`Server started in port ${port}`);
});
