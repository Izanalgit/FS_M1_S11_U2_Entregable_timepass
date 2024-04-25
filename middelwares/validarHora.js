const horaLimite = 12;

const validarHora = (req,res,next)=>{
    const hora = res.locals.hora;
    if(hora<horaLimite){
        res.locals.mensaje = `Aún no es la hora, espera hasta las ${horaLimite}:00 para entrar`;
        return res.redirect('/?mensaje=' + encodeURIComponent(res.locals.mensaje));
    }
    next();
}

module.exports=validarHora;