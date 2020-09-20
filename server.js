const express = require("express");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt-nodejs");
const cors = require("cors");

const app = express();

app.use(bodyParser.json());
app.use(cors());

const database = {
  users: [
    {
      id: "1",
      name: "max",
      email: "max@gmail.com",
      password: "red",
      entries: 0,
      joined: new Date(),
    },
    {
      id: "2",
      name: "luke",
      email: "luke@gmail.com",
      password: "brown",
      entries: 0,
      joined: new Date(),
    },
  ],
};

app.get("/", (req, res) => {
  res.send(database.users);
});

app.post("/signin", (req, res) => {
  if (
    req.body.roll1 === database.users[0].roll1 &&
    req.body.name1 === database.users[0].name1 &&
    req.body.email1 === database.users[0].email1 &&
    req.body.phone1 === database.users[0].phone1 &&
    req.body.password1 === database.users[0].password1 &&
    req.body.domain1 === database.users[0].domain1
  ) {
    res.json("success");
  } else {
    res.status(400).json("error logging in");
  }
});

app.post("/signin2", (req, res) => {
  if (
    req.body.email === database.users[0].email &&
    req.body.password === database.users[0].password
  ) {
    res.json("success");
  } else {
    res.status(400).json("error logging in");
  }
});

app.post("/register", (req, res) => {
  const { roll, email } = req.body;
  database.users.push({
    id: "3",
    roll: roll,
    email: email,
    entries: 0,
    joined: new Date(),
  });
  res.json(database.users[database.users.length - 1]);
});

app.get("profile/ :id", (req, res) => {
  const { id } = req.params;
  let found = false;
  database.users.forEach((user) => {
    if (user.id === id) {
      found = true;
      return res.json(user);
    }
  });
  if (!found) {
    res.status(400).json("user not found");
  }
});

app.listen(3000, () => {
  console.log("app is running on port 3000");
});
