const express = require("express");
const app = express();

const mainRoute = require("./routes/index");
const endRoute = require("./routes/endroute");

const horaMiddleware = require("./middelwares/horaMiddleware");
const valdMiddleware = require("./middelwares/validarHora");

app.use(horaMiddleware);
app.use("/endroute",valdMiddleware);
app.use("/",endRoute,mainRoute);


app.listen(3000, ()=>{
    console.log("Sever on http://localhost:3000");
})