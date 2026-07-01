const path = require("path");
const { getPhoto } = require("./get-photo.js");

const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(__dirname + "/public"));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", async (req, res) => {
  const photoUrl = await getPhoto();

  res.render("index", {
    imageSrc: photoUrl,
  });
});

app.listen(port, () => {
  console.log(`Server started in port ${port}`);
});
