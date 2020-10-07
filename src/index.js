const express = require('express');
const app = express();
const path = require('path');


//settings
app.set('port', 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

//middlewares


//router

app.use(require('./routes/index'));


//static files
app.use(express.static(path.join(__dirname, 'public')));


//Listing server 3000
app.listen(app.get('port'), () => {

    console.log('Server funcionando en el puerto ', app.get('port'));

});