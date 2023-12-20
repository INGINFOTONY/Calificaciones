const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    res.render("usuarios/signin",{
        viewTitle : "Insertar usuarios"
    });
});
 

module.exports = router;