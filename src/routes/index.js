//Este Js se utiliza para agrupar las rutas 

const express = require('express');
const router = express.Router(); // Sirve para crear multiples rutas y mantenerlos por archivos por separado

//Rutas 

    router.get('/', (req, res) => {
        res.render('index.html', {pHeader: 'partials/header.html', pHead: 'partials/head.html'});
    });

    router.get('/about', (req, res) => {
        res.render('about.html');
    });

    router.get('/blog', (req, res) => {
        res.render('blog.html');
    });

    router.get('/contact', (req, res) => {
        res.render('contact.html');
    });


module.exports = router;