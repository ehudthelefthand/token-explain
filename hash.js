const crypto = require("crypto");

const hash = (data, key) => {
  return crypto.createHmac("sha256", key).update(data).digest("base64");
};

// console.log(hash("password", "secret"));

module.exports = hash;
