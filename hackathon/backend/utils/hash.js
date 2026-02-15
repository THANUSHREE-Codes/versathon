// const crypto = require("crypto");

// // Create SHA256 hash of certificate data
// const createHash = (data) => {
//   return crypto.createHash("sha256").update(data).digest("hex");
// };

// module.exports = { createHash };
const crypto = require("crypto");

const createHash = (data) => {
  return crypto.createHash("sha256").update(data).digest("hex");
};

module.exports = { createHash };
