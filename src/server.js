import express from "express";
import configViewEngine from "./configs/viewEngine";
import initWedRoutes from "./routes/wed";
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 8080;

// config view engine
configViewEngine(app);

// init wed routes
initWedRoutes(app);

app.listen(PORT, () => {
  console.log(">>> JWT Backend is a running on the port = " + PORT);
});
