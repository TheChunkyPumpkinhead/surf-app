module.exports = {
  PORT: process.env.PORT || 8080,

  API_ENDPOINT:
    process.env.REACT_APP_API_ENDPOINT ||
    "https://surf-jotz-api-depolyment.onrender.com",
  //  "https://surf-jotz.herokuapp.com/api"
  // "https://surf-jotz-api-depolyment.onrender.com"
};
