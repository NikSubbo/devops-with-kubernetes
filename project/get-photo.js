const fs = require("fs");
const path = require("path");

const filesDir = path.join(__dirname, "files");
const photoFile = path.join(filesDir, "photo.txt");

const tenMinutes = 10 * 60 * 1000;

const getPhoto = async () => {
  if (!fs.existsSync(filesDir)) {
    fs.mkdirSync(filesDir);
  }

  if (fs.existsSync(photoFile)) {
    const raw = fs.readFileSync(photoFile, { encoding: "utf8" });
    const separator = raw.indexOf(":");

    const photoTime = Number(raw.slice(0, separator));
    const photoUrl = raw.slice(separator + 1);

    if (Date.now() - photoTime <= tenMinutes) {
      return photoUrl;
    }
  }

  const { url } = await fetch("https://picsum.photos/1200");

  fs.writeFileSync(photoFile, `${Date.now()}:${url}`);

  return url;
};

module.exports = { getPhoto };
