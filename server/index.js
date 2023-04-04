require("dotenv").config();
const express = require("express");
const bodyPhaser = require("body-parser");
const cors = require("cors");
const router = require("./routes/_index.routes");

const PORT = process.env.PORT || 8080;

const app = express();

// app.use(bodyPhaser.json());
app.use(cors({ origin: "*" }));

app.use("/api/v1/", router);

app.get("/test", (req, res) => {
    res.send("Test OK from server!");
});

app.listen(PORT, () => {
    console.log("server running on port " + PORT);
});
