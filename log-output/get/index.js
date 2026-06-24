const fs = require("fs");
const path = require("path");

const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

const logFile = path.join(__dirname, "files", "log.txt");

app.get("/", (req, res) => {
  let logs = "No logs yet";

  if (fs.existsSync(logFile)) {
    logs = fs.readFileSync(logFile, "utf8");
  }

  res.send(logs);
});

app.listen(port, () => {
  console.log(`Server started in port ${port}`);
});
