const express = require("express");
const router = express.Router();

router.get("/",(req,res)=>{
    let mensaje='';
    if(req.query.mensaje)mensaje =`<h2>${req.query.mensaje}</h2>`
    res.send(`
        <h1>Bienvenido</h1>
        <h2>La hora actual es: ${res.locals.horaActual}<h/2>
        </br>
        ${mensaje}
        <button onclick="window.location.href='/endroute'">Entrar</button>
    `);
})



router.use((req,res)=>res.status(404).send("<h1>ERROR 404</h1>"))

module.exports = router;