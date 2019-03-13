const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  try {
    console.log(req.url);
    console.log(req.headers);

    const token = req.headers.authorization.split(" ")[1];
    console.log(token);


    console.log("process.env.JWT_KEY " + process.env.JWT_KEY);
    const decodedToken = jwt.verify(token, process.env.JWT_KEY);
    console.log(decodedToken);

    req.userData = { email: decodedToken.email, userId: decodedToken.userId };
    console.log(req.userData);
    next();
  } catch (error) {
    res.status(401).json({ message: "You are not authenticated!" });
  }
};
