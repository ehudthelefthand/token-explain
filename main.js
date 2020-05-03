const token = require("./token");
const hash = require("./hash");

const sample = hash("password", "secret");
console.log("sample => ", sample);
const again = hash("password", "secret");
console.log("again => ", again);
const passChanged = hash("anotherpassword", "secret");
console.log("password changed => ", passChanged);
const keyChanged = hash("password", "anothersecret");
console.log("key changed => ", keyChanged);

const tk = token();
console.log(`hash("${tk}", "secret") => `, hash(tk, "secret"));
