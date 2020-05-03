const crypto = require("crypto");

const rand = () => {
  const buffer = crypto.randomBytes(32); // ความยาวตรงนี้ คือยังไง? สัั้นๆ คือ ยิ่งยาวยิ่งดี
  const token = buffer
    // .toString("hex");
    .toString("base64")
    .replace(/\//g, "_")
    .replace(/\+/g, "-");
  return token;
};

// console.log(rand());

module.exports = rand;
