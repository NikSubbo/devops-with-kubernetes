const path = require("path");

const express = require("express");
const app = express();

const port = process.env.PORT || 3001;
const todos = [];

app.use(express.json());

app.get("/todos", async (req, res) => {
  res.json(todos);
});

app.post("/todos", async (req, res) => {
  todos.push(req.body.todo);

  res.status(201).send("Todo created");
});

app.listen(port, () => {
  console.log(`Server started in port ${port}`);
});
