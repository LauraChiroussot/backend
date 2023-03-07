//création fichier routes intéraction avec sauces et app V1 C1 P3 Ch1

const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

const saucesCtrl = require('../controllers/sauces');

router.get('/', auth, saucesCtrl.getAllSauces);//récupération des sauces
router.post('/', auth, multer, saucesCtrl.createSauce);//lecture et écriture
router.get('/:id', auth, saucesCtrl.getOneSauce);//interaction avec la page affichage de la sauce (suite insertion de la sauce) 
router.put('/:id', auth, multer, saucesCtrl.modifySauce);//modification 
router.delete('/:id', auth, saucesCtrl.deleteSauce);//supppression
/*router.post('/:id/like', auth, saucesCtrl.setStatut);*/

module.exports = router;
