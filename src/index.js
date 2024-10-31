import e from "express";
import "dotenv/config.js";
import "./db/server.js";
import species_router from "./http:/routes/species-route.js";
import explorer_router from "./http:/routes/explorer-route.js";
import expedition_router from "./http:/routes/expedition-route.js";

const app = e();

app.use(e.json);
app.use("/species", species_router);
app.use("/explorer", explorer_router);
app.use("/expedition", expedition_router);

app.listen(process.env.API_PORT, () => console.log("Server running"));
