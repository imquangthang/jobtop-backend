import express from "express";
import configViewEngine from "./config/viewEngine";
import initWedRoutes from "./routes/wed";
import initApiRoutes from "./routes/api";
import configCors from "./config/cors";
require("dotenv").config();
import bodyParser from "body-parser";
// import connection from "./config/connectDB";
import { createJWT, verifyToken } from "./middleware/JWTAction";

const app = express();
const PORT = process.env.PORT || 8080;

// config cors
configCors(app);

// config view engine
configViewEngine(app);

// config body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// test connection DB
// connection();

// test jwt
createJWT();
let decoded = verifyToken(
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiVEhBTkciLCJhZGRyZXNzIjoiUVVBTkcgTkFNIiwiaWF0IjoxNzA5NDY4NDkzfQ.XCZVhygN_G8r1uSnlTV5Pd7UyaHQnHjZDrruNqorUmQ"
);

console.log(decoded);

// init wed routes
initWedRoutes(app);
initApiRoutes(app);

app.listen(PORT, () => {
  console.log(">>> JWT Backend is a running on the port = " + PORT);
});
