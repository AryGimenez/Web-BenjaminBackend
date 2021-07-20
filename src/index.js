const express = require('express');
const app = express();
const path = require('path'); // Se utiliza para trabajar con / o contra barra dependiendo el So


// Asigna el numero de puerto
app.set('port', 4000);
app.engine('html', require('ejs').renderFile); // Se utiliza para poder utilizar los archivos html Prosesadoes por ejs En caso contrario tendrias que usar extencion ejs

app.set('views', path.join(__dirname, 'views')); // retorno la ruta absoluta para las views

app.set('view engine','ejs'); // que motor de plantillas voy a usar en este caso ejs


// Rutas 
app.use(require('./routes/index'));


// Esta constnte tiene el nombre de la ruta menos el src para poder llamar a node modules.
 const mRuta_node_modules = __dirname.slice(0,-4);

// archivos staticos
app.use(express.static( path.join(__dirname, 'pablic')));

app.use(express.static( path.join(mRuta_node_modules, '/node_modules/bootstrap/dist')));



//escuchando al servicio 
app.listen(app.get('port'), () => {
    console.log( path.join(mRuta_node_modules, '/node_modules/bootstrap/dist/css/bootstrap.min.css'))
    console.log('Servidor en ', app.get('port'));
});