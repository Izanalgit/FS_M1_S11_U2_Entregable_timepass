const horaMiddleware = (req, res, next) => {
    const now = new Date();
    const hours = now.getHours();
    const minus = now.getMinutes();

    res.locals.hora = hours;
    res.locals.horaActual = `${hours}:${minus}`;

    next();
  };
  
  module.exports = horaMiddleware;
  