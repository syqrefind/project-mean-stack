const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/user");

exports.createUser = (req, res, next) => {
  bcrypt.hash(req.body.password, 10).then(hash => {
    const user = new User({
      email: req.body.email,
      password: hash
    });
    user
      .save()
      .then(result => {
        res.status(201).json({
          message: "User created!",
          result: result
        });
      })
      .catch(err => {
        res.status(500).json({
          message: "Invalid authentication credentials!"
        });
      });
  });
}

exports.userLogin = (req, res, next) => {
  let fetchedUser;
  // console.log(req.body.email);
  // console.log(req.body.password);
  User.findOne({ email: req.body.email })
    .then(user => {
      if (!user) {
        console.log('user not found');
        return res.status(401).json({
          message: "Auth failed"
          // user not found
        });
      }
      fetchedUser = user;
      // console.log('user found');
      // console.log(fetchedUser.email + ' ' + fetchedUser._id + ' before then');
      return bcrypt.compare(req.body.password, user.password);
    })
    .then(result => {
      if (!result) {
        // console.log('password not match');
        return res.status(401).json({
          message: "Auth failed"
          // no result
        });
      }
      // console.log('password matches');
      // console.log(fetchedUser.email + ' ' + fetchedUser._id);
      const token = jwt.sign(
        { email: fetchedUser.email, userId: fetchedUser._id },
        "secret_this_should_be_longer",
        { expiresIn: "1h" }
      );
      // console.log('token created');
      res.status(200).json({
        token: token,
        expiresIn: 3600,
        userId: fetchedUser._id
      });
      return;
    })
    .catch(err => {
      // console.log('error catched');
      return res.status(401).json({
        message: "Invalid authentication credentials!"
        // problem occurs when generating or sending jwt to frontend
      });
    });
}
