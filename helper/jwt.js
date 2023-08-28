const jwt = require("jsonwebtoken");

const jwtToken = (userId) => {
  return jwt.sign({ userId: userId }, process.env.SECRET, {
    expiresIn: "1 day",
  });
};
module.exports = jwtToken;
