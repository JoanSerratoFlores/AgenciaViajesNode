import express from "express";
import {
  paginaInicio,
  paginaNosotros,
  paginaViajes,
  paginaTestimoniales,
} from "../Controllers/paginasControllers.js";

const router = express.Router();

router.get("/", paginaInicio);

router.get("/Nosotros", paginaNosotros);

router.get("/Viajes", paginaViajes);

router.get("/Testimoniales", paginaTestimoniales);

export default router;
