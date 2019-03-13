const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

// const postsRoutes = require("./routes/posts");
const userRoutes = require("./routes/user");
const resourceRoutes = require("./routes/resource");
// const projectRoutes = require("./routes/project");


const app = express();

mongoose
  .connect(
    "mongodb+srv://new-admin-0:8415syq_@my-dream-cluster-seo5i.mongodb.net/management-system?retryWrites=true",
    { useNewUrlParser: true }
  )
  .then(() => {
    console.log("Connected to database!");
  })
  .catch(() => {
    console.log("Connection failed!");
  });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/images", express.static(path.join("images")));

// app.use((req, res, next) => {
//     console.log('received request: ' + req);
//     next();
// });
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  next();
});

// app.use("/api/posts", postsRoutes);
app.use("/api/user", userRoutes);
app.use("/api/resource", resourceRoutes);
// app.use("/api/project", projectRoutes);


module.exports = app;
