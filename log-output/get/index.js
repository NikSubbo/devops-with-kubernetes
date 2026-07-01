const fs = require("fs");
const path = require("path");

const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

const filesDir = path.join(__dirname, "files");
const logFile = path.join(filesDir, "log.txt");

app.get("/", async (req, res) => {
  let logs = "No logs yet";

  if (fs.existsSync(logFile)) {
    logs = fs.readFileSync(logFile, "utf8");
  }

  const response = await fetch("http://ping-pong-svc:2346/pings");
  const data = await response.json();

  res.send(`${logs}\nPing / Pongs: ${data.count}`);
});

app.listen(port, () => {
  console.log(`Server started in port ${port}`);
});
