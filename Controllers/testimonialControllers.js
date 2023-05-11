import { Testimonial } from "../models/Testimoniales.js";

const guardarTestimoniales = async (req, res) => {
  //Validar

  const { nombre, correo, mensaje } = req.body;

  const errores = [];

  if (nombre.trim() === "") {
    errores.push({ mensaje: "El Nombre esta Vacio" });
  }

  if (correo.trim() === "") {
    errores.push({ mensaje: "El Correo esta Vacio" });
  }

  if (mensaje.trim() === "") {
    errores.push({ mensaje: "El Mensaje esta Vacio" });
  }

  if (errores.length > 0) {

    //Consultar Testimoniales Existentes
    const testimoniales = await Testimonial.findAll();

    //Mostrar la vista con errores

    res.render("Testimoniales", {
      pagina: "Testimoniales",
      errores,
      nombre,
      correo,
      mensaje,
      testimoniales
    });
  } else {
    //Almacenar en base de datos

    try {
      await Testimonial.create({
        nombre,
        correo,
        mensaje,
      });
      res.redirect('/Testimoniales');
    } catch (error) {
      console.log(error);
    }
  }
};

export { guardarTestimoniales };
