const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "https://issuetracker-heroku.herokuapp.com/",
      changeOrigin: true,
    })
  );
};