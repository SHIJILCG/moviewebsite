const express = require("express");
const app = express();
const cors = require("cors");
const json_data = require("../server/JSON_DATA/users.json");
app.use(cors());
app.use(express.json());
app.get("/users", (req, res) => {
  res.json(json_data.users);
});

app.post("/create-user", (req, res) => {
  const newUser = req.body;
  json_data.users.push(newUser);
  res.status(201).json({ message: "User added successfuly", user: newUser });
});

app.listen(4040, () => {
  console.log("server listening on port  4040");
});
