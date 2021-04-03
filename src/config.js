module.exports = {
  PORT: process.env.PORT || 8080,
  // other stuff
  API_ENDPOINT: process.env.REACT_APP_API_ENDPOINT ||
    "http://localhost:8080/api"
};