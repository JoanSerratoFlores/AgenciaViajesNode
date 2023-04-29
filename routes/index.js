import express from "express";

const router = express.Router();

router.get('/', (req,res) => { //req- lo que enviamos  --- res - lo que express nos responde
    
    res.render('Inicio');

}); 

router.get('/Nosotros', (req,res) => { //req- lo que enviamos  --- res - lo que express nos responde
    
    const viajes = 'Viajes a Alemania';
    
    res.render('Nosotros', {
    
        viajes
    
    });

}); 

router.get('/Contacto', (req,res) => { //req- lo que enviamos  --- res - lo que express nos responde
    res.send('Contacto');
}); 

export default router