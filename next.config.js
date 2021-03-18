const path = require("path");
module.exports = {
  // absoulte path
  webpack: (config) => {
    config.resolve.alias["@"] = path.resolve(__dirname);
    return config;
  },
  env: {
    AUTH0_NAMESPACE: process.env.AUTH0_NAMESPACE,
    BASE_URL: process.env.BASE_URL,
  },
};
