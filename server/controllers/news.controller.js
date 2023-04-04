const axios = require("axios");
const API_KEY = process.env.API_KEY;

const getNews = async (req, res) => {
    try {
        const { st } = req.params;
        const axiosRes = await axios.get(
            `https://newsapi.org/v2/everything?q=${st}&from=2023-03-20&sortBy=publishedAt&apiKey=${API_KEY}&pageSize=3`
        );

        res.status(200).json(axiosRes.data);
    } catch (error) {
        res.status(400).json({ error: "an error occured" });
    }
};

module.exports = { getNews };
