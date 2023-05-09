import express from "express";
import {
  paginaInicio,
  paginaNosotros,
  paginaViajes,
  paginaTestimoniales,
  paginaDetalleViaje,
} from "../Controllers/paginasControllers.js";
import {
  guardarTestimoniales
} from "../Controllers/testimonialControllers.js";


const router = express.Router();

router.get("/", paginaInicio);

router.get("/Nosotros", paginaNosotros);

router.get("/Viajes", paginaViajes);

router.get("/Viajes/:slug", paginaDetalleViaje);

router.get("/Testimoniales", paginaTestimoniales);
router.post("/Testimoniales", guardarTestimoniales);

export default router;
