const fs = require("fs");
const path = require("path");

const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

const filesDir = path.join(__dirname, "files");
const pingpongFile = path.join(filesDir, "pingpong.txt");

app.get("/pingpong", (req, res) => {
  if (!fs.existsSync(filesDir)) {
    fs.mkdirSync(filesDir);
  }

  if (!fs.existsSync(pingpongFile)) {
    fs.writeFileSync(pingpongFile, "0");

    return res.send("pong 0");
  }

  const raw = fs.readFileSync(pingpongFile, { encoding: "utf8" });
  const count = parseInt(raw, 10) || 0;
  const newCount = count + 1;
  fs.writeFileSync(pingpongFile, String(newCount));

  return res.send(`pong ${newCount}`);
});

app.listen(port, () => {
  console.log(`Server started in port ${port}`);
});
