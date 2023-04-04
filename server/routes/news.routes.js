const { Router } = require("express");
const { getNews } = require("../controllers/news.controller");

const newsRouter = Router();

newsRouter.get("/get/:st", getNews);

module.exports = newsRouter;

//{Base_URL}/api/v1/news/get
