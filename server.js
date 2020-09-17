const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

const database = {
  users: [
    {
      id: "1",
      roll1: "17102B0007",
      name1: "Shaunak",
      phone1: "9967803920",
      email1: "shaunakdivati@gmail.com",
      password1: "orange",
      domain1: "AI",
      entries: 0,
      joined: new Date(),
    },
  ],
};

app.use(bodyParser.json());
app.use(cors());

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

/*app.post("/register", (req, res) => {
  const { roll, name, emailaddress, domain, phone } = req.body;
  database.users.push({
    id: "3",
    roll: roll,
    name: name,
    emailaddress: email,
    domain: domain,
    phone: phone,
    entries: 0,
    joined: new Date(),
  });
  res.json(database.users[database.users.length - 1]);
});
*/

/*app.get("profile/ :id", (req, res) => {
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
*/

app.listen(3000, () => {
  console.log("app is running on port 3000");
});
