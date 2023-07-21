//Express
const express = require("express");
const server = express();
//Morgan
const morgan = require("morgan");
//Ruter
const router = require("./routes/index");

//Puerto servidor
const PORT = 3001;

//Middelware
server.use(express.json());
server.use(morgan("dev"));
server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

//Rutas
server.use("/rickandmorty", router);

//Server activo
server.listen(PORT, () => {
  console.log("Server raised in port: " + PORT);
});
