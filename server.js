const express = require("express");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt-nodejs");
const cors = require("cors");
const knex = require("knex");

const db = knex({
  client: "pg",
  connection: {
    host: "127.0.0.1",
    user: "postgres",
    password: "test",
    database: "fyp",
  },
});

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send(db.users);
});

app.post("/groupform", async (req, res) => {
  const { roll1, code1, roll2, code2, roll3, code3, guide, domain } = req.body;
  try {
    db("groups")
      .insert({
        roll1: roll1,
        code1: code1,
        roll2: roll2,
        code2: code2,
        roll3: roll3,
        code3: code3,
        guide: guide,
        domain: domain,
      })
      .then(console.log);
    res.status(102).send("success");
  } catch {
    res.status(400).send("error logging in");
  }
});

app.post("/signin", async (req, res) => {
  const { email, password } = req.body;
  db.select("email", "password")
    .from("users")
    .where("email", "=", email)
    .where("password", "=", password)
    .catch((err) => res.status(400).json("wrong credentials"));
});

/*
app.post("/signin", (req, res) => {
  db.select("email", "password")
    .from("users")
    .where("email", "=", req.body.email)
    .then((data) => {
      const isValid = bcrypt.compareSync(req.body.password, data[0].hash);
      if (isValid) {
        return db
          .select("*")
          .from("users")
          .where("email", "=", req.body.email)
          .then((user) => {
            res.json(user[0]);
          })
          .catch((err) => res.status(400).json("unable to get user"));
      } else {
        res.status(400).json("wrong credentials");
      }
    })
    .catch((err) => res.status(400).json("wrong credentials"));
});*/

/*app.post("/register", (req, res) => {
  const { name, roll, phone, email, password } = req.body;
  //const hash = bcrypt.hashSync(password);
  db.transaction((trx) => {
    trx
      .insert({
        password: password,
        email: email,
      })
      .into("login")
      .returning("email")
      .then((loginEmail) => {
        return trx("users")
          .returning("*")
          .insert({
            name: name,
            roll: roll,
            //branch: branch,
            //div: div,
            phone: phone,
            email: loginEmail[0],
            joined: new Date(),
          })
          .then((user) => {
            res.json(user[0]);
          });
      })
      .then(trx.commit)
      .catch(trx.rollback);
  }).catch((err) => res.status(400).json("unable to register"));
});*/

app.post("/register", async (req, res) => {
  const { name, roll, phone, email, password } = req.body;
  try {
    //const salt = await bcrypt.genSalt();
    //const hashedPassword = await bcrypt.hash(password, salt);
    db("users")
      .insert({
        roll: roll,
        name: name,
        phone: phone,
        email: email,
        password: password,
        //branch: branch,
        //div: div,
      })
      .then(console.log);
    res.status(101).send("Registered");
  } catch {
    res.status(400).send("Error");
  }
});

app.get("/profile/:id", (req, res) => {
  const { id } = req.params;
  db.select("*")
    .from("users")
    .where({ id })
    .then((user) => {
      if (user.length) {
        res.json(user[0]);
      } else {
        res.status(400).json("Not found");
      }
    })
    .catch((err) => res.status(400).json("error getting user"));
});

app.listen(3000, () => {
  console.log("app is running on port 3000");
});
