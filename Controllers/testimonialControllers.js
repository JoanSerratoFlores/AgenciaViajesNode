const guardarTestimoniales = (req, res) => {
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
    //Mostrar la vista con errores

    res.render("Testimoniales", {
      pagina: "Testimoniales",
      errores,
      nombre,
      correo,
      mensaje,
    });
  }
};

export { guardarTestimoniales };
