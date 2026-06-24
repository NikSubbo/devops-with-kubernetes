const { randomUUID } = require("crypto");
const fs = require("fs");
const path = require("path");

const string = randomUUID();
const filesDir = path.join(__dirname, "files");

if (!fs.existsSync(filesDir)) {
  fs.mkdirSync(filesDir);
}

const logFile = path.join(filesDir, "log.txt");

setInterval(() => {
  fs.writeFileSync(logFile, `${new Date().toISOString()}-${string}`);
}, 5000);
