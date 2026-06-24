const { randomUUID } = require("crypto");
const fs = require("fs");
const path = require("path");

const string = randomUUID();
const filesDir = path.join(__dirname, "files");

if (!fs.existsSync(filesDir)) {
  fs.mkdirSync(filesDir);
}

const logFile = path.join(filesDir, "log.txt");

const logStream = fs.createWriteStream(logFile, {
  flags: "a", // append mode
});

setInterval(() => {
  logStream.write(`${new Date().toISOString()}-${string}\n`);
}, 5000);
