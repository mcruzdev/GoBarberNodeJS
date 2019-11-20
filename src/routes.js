const { Router } = require("express");

const routes = new Router();

routes.get("/", (req, res, next) => {
    return res.json("Hello world");
});

module.exports = routes;