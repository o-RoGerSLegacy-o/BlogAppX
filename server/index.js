const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const User = require("./models/User");
const bcrypt = require("bcrypt");
const salt = bcrypt.genSaltSync(10);
const jwt = require("jsonwebtoken");
const secret = "fafadfatgadg54ag5a45tgahyasagag";
const app = express();

app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(express.json());
mongoose.connect(
  "mongodb+srv://blogger:ob7GR6frjFYnx0xt@cluster0.4z28yyl.mongodb.net/"
);
app.post("/register", async (req, res) => {
  const { username, password } = req.body;
  try {
    const userDoc = await User.create({
      username,
      password: bcrypt.hashSync(password, salt),
    });

    res.json(userDoc);
  } catch (error) {
    res.status(400).json(error);
  }
});

//mongodb+srv://RogerS:Shreehari99@rogerscluster.ahmwhzx.mongodb.net/
//ufd5bx9RcnrjnYXi
//mongodb+srv://quatidianstore:quatidianstore@ecommerce.9qm7ux4.mongodb.net/

//mongodb+srv://blogger:ob7GR6frjFYnx0xt@cluster0.4z28yyl.mongodb.net/
//ob7GR6frjFYnx0xt

app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const userDoc = await User.findOne({ username });
  const passOk = bcrypt.compareSync(password, userDoc.password);
  if (passOk) {
    jwt.sign({ username, id: userDoc._id }, secret, {}, (err, token) => {
      if (err) throw err;
      res.cooki("token", token).json("ok");
    });

    res.json();
  } else {
    res.status(400).json("wrong credentials");
  }
});
app.listen(4000, () => {
  console.log("the server is running");
});
