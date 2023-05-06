import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  //req- lo que enviamos  --- res - lo que express nos responde

  res.render("Inicio", {
    pagina: "Inicio",
  });
});

router.get("/Nosotros", (req, res) => {
  //req- lo que enviamos  --- res - lo que express nos responde
  res.render("Nosotros", {
    pagina: "Nosotros",
  });
});

router.get("/Viajes", (req, res) => {
  //req- lo que enviamos  --- res - lo que express nos responde
  res.render("Viajes", { 
    pagina: "Viajes", 
  });
});

router.get("/Testimoniales", (req, res) => {
    //req- lo que enviamos  --- res - lo que express nos responde
    res.render("Testimoniales", { 
      pagina: "Testimoniales", 
    });
  });

export default router;
