import {Viaje} from '../models/Viaje.js';

const paginaInicio = (req, res) => {
  res.render("Inicio", {
    pagina: "Inicio",
  });
};

const paginaNosotros = (req, res) => {
  res.render("Nosotros", {
    pagina: "Nosotros",
  });
};

const paginaViajes = async (req, res) => {

  //Consultar DB
  const viajes = await Viaje.findAll();

  console.log(viajes);

  res.render("Viajes", {
    pagina: "Próximos Viajes",
    viajes,
  });
};

const paginaTestimoniales = (req, res) => {
  res.render("Testimoniales", {
    pagina: "Testimoniales",
  });
};

export { paginaInicio, paginaNosotros, paginaViajes, paginaTestimoniales };
