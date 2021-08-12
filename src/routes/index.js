//Este Js se utiliza para agrupar las rutas 
const express = require('express');
const router = express.Router(); // Sirve para crear multiples rutas y mantenerlos por archivos por separado

//Rutas 

    router.get('/', (req, res) => {
        res.render('index.html', {pHeader: 'partials/header.html', pHead: 'partials/head.html',   pFooter: 'partials/footer.html', pJs: 'partials/js.html'});
    });

    router.get('/about', (req, res) => {
        res.render('about.html', {pHeader: 'partials/header.html', pHead: 'partials/head.html'});
    });

    router.get('/blog', (req, res) => {
        res.render('blog.html', {pHeader: 'partials/header.html', pHead: 'partials/head.html',  pFooter: 'partials/footer.html'});
    });

    router.get('/contact', (req, res) => {
        res.render('contact.html', {pHeader: 'partials/header.html', pHead: 'partials/head.html', pFooter: 'partials/footer.html'});
    });

    router.get('/image-detail', (req, res) => {
        res.render('image-detail.html', {pHeader: 'partials/header.html', pHead: 'partials/head.html}'});
    });

    router.get('/pruebas', (req, res) => {
        res.render('pruebas.html', {pHeader: 'partials/header.html', pHead: 'partials/head.html'});
    });



module.exports = router;