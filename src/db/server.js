require("dotenv").config();
import explorer_route from "../http:/routers/explorer-route.js";
import expedition_route from "../http:/routers/expedition-route.js";
import species_route from "../http:/routers/species-route.js";

const express = require("express");
const connectDB = require("./mongo-conection.js");

const app = express();
const PORT = process.env.PORT || 8000;

connectDB();

app.use(express.json());

app.use("/explorers", explorer_route);
app.use("/expedition", expedition_route);
app.use("/species", species_route);

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT} PORT`)
})