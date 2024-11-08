const jwt = require('jsonwebtoken');

require("dotenv").config({ path: "./config.env" });

function decodeToken(token) {
  const secret = process.env.SECRET_KEY;

  try {
    const decoded = jwt.verify(token, secret);
    return decoded;
  } catch (err) {

    console.error('Token inválido:', err);
    return null;
  }
}

module.exports = decodeToken;
