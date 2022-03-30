const jwt = require("jsonwebtoken");

const protect = async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      const decode = jwt.verify(token, process.env.JWT_SECRET);
      console.log(decode);
      next();
    } catch (err) {
      res.json({ message: "not autorized" });
    }
  } else {
    res.json({ message: "not autorized" });
  }

  if (!token) {
    res.status(401);
  }
};

module.exports = { protect };
