const base64url = require("base64url");
const hash = require("./hash");
const jwt = require("jsonwebtoken");

const header = {
  alg: "HS256",
  typ: "JWT",
};

const payload = {
  userID: 1,
  type: "access",
  role: "admin",
};

const KEY = "secret";

const h = base64url(JSON.stringify(header));
console.log("header => ", h);

const p = base64url(JSON.stringify(payload));
console.log("payload => ", p);

const s = hash(`${h}.${p}`, KEY);
console.log("signature => ", s);

console.log(`final jwt => ${h}.${p}.${s}`);

const tk = jwt.sign(payload, KEY);
console.log(`jsonwebtoken => `, tk);

const claims = jwt.verify(tk, KEY);
console.log(`Is valid? => `, claims);
