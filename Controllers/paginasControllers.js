import { Viaje } from "../models/Viaje.js";
import { Testimonial } from "../models/Testimoniales.js";

const paginaInicio = async (req, res) => {

  //Consultar 3 viajes del modelo Viaje

  const promiseDB = [];

  promiseDB.push(Viaje.findAll({limit:3}));
  promiseDB.push( Testimonial.findAll({limit:3}));

  try {

      const resultado = await Promise.all(promiseDB)

    res.render("inicio", {
      pagina: "inicio",
      clase:'home',
      viajes:resultado[0],
      testimoniales:resultado[1]
    });
    
  } catch (error) {
    console.log(error);
  }


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

const paginaTestimoniales = async (req, res) => {
  try {
    const testimoniales = await Testimonial.findAll();
    res.render("Testimoniales", {
      pagina: "Testimoniales",
      testimoniales
    });
  } catch (error) {
    console.log(error);
  }
};

//Muestra un viaje por slug
const paginaDetalleViaje = async (req, res) => {
  const { slug } = req.params;

  try {
    const resultado = await Viaje.findOne({ where: { slug} });
    res.render('viaje',{
      pagina: 'Informacion Viaje',
      resultado
    })
  } catch (error) {
    console.log(error);
  }
};

export {
  paginaInicio,
  paginaNosotros,
  paginaViajes,
  paginaTestimoniales,
  paginaDetalleViaje,
};
