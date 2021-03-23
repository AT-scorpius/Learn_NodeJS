const express = require('express')
const app = express()
const port = 3000
const path = require('path')
const handlebars = require('express-handlebars')
var morgan = require('morgan') //HTTP Logger
app.use(morgan('combined'))
    //Handlebars
app.engine('hbs', handlebars({ extname: '.hbs' }));
app.set('view engine', 'hbs');
console.log('PATH: ', __dirname);
app.set('views', path.join(__dirname, 'resources/views'))
app.get('/', (req, res) => {
    res.render('home');
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})