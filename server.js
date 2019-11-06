const express = require("express");
const mongoose = require("mongoose");
const app = express();
const db = require("./config/keys").mongoURI;
const bodyParser = require("body-parser");
const passport = require("passport");

const users = require("./routes/apis/users");
const posts = require("./routes/apis/posts");
const profile = require("./routes/apis/profile");
const port = process.env.PORT || 5000;

app.use(passport.initialize());
require("./config/passport")(passport);

mongoose
  .connect(db)
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.log(err));
app.get("/", (req, res) => res.send("Hello world by Hari"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api/users", users);
app.use("/api/profile", profile);
app.use("/api/posts", posts);

app.listen(port, () => console.log(`Server is running on Port ${port}`));
