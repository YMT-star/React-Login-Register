const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userModel = require("./models/user");
const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(
  "mongodb+srv://user:1122user@cluster0.qrq4j8d.mongodb.net/User?retryWrites=true&w=majority"
);
app.post("/login", (req, res) => {
  const { email, password } = req.body;
  userModel.findOne({ email: email }).then((user) => {
    if (user) {
      if (user.password === password) {
        res.json("Success");
      } else {
        res.json("the password is incorrect");
      }
    } else {
      res.json("No record existed");
    }
  });
});
app.post("/register", (req, res) => {
  userModel
    .create(req.body)
    .then((user) => res.json(user))
    .catch((err) => res.json(err));
});
app.listen(3002, () => {
  console.log("server is running");
});
