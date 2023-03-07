const express = require('express');

//Connexion avec Mongodb Atlas
const mongoose = require('mongoose');

//intéraction avec le fichier sauce dans le dossier routes V1 C1 P3 Ch1
const saucesRoutes = require('./routes/sauces');

//intéraction avec routes/user V1 C1 P3 Ch3
const userRoutes = require('./routes/user');

//accéder au path du serveur V1 C1 P4 Ch2
const path = require('path');

mongoose.connect('mongodb+srv://new-user_1:Bw1@cluster0.cxrpszc.mongodb.net/?retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'));


const app = express();

//rajout comme indiqué vidéo erreurs de CORS 2 C1 P1 Ch5 donner la possibilité à tous les utilisateurs de se connecter au serveur
// route qui permet à tous les utilisateurs d'accéder à l'API 
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use(express.json()); //idem que bodyParsers

//intéraction/enregistrement avec le fichier sauce dans le dossier routes V1 C1 P3 Ch1
app.use('/api/sauces', saucesRoutes);
//intéraction/enregistrement avec routes/user V1 C1 P3 Ch3
app.use('/api/auth', userRoutes);
//ajout de fichier statique V1 C1 P4 Ch2
app.use('/images', express.static(path.join(__dirname, 'images')));

module.exports = app;
