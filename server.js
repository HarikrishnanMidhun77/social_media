const express = require("express");
const mongoose = require("mongoose");
const app = express();
const db = require("./config/keys").mongoURI;

const users = require("./routes/apis/users");
const posts = require("./routes/apis/posts");
const profile = require("./routes/apis/profile");

mongoose
  .connect(db)
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.log(err));
app.get("/", (req, res) => res.send("Hello world by Hari"));
const port = process.env.PORT || 5000;

app.use("/api/users", users);
app.use("/api/profile", profile);
app.use("/api/posts", posts);

app.listen(port, () => console.log(`Server is running on Port ${port}`));
