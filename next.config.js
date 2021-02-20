const path = require("path");
module.exports = {
  // absoulte path
  webpack: (config) => {
    config.resolve.alias["@"] = path.resolve(__dirname);
    return config;
  },
};
