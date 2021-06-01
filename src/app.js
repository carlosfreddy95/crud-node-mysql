const express = require('express'),
    path = require('path'),
    morgan = require('morgan'),
    mysql = require('mysql'),
    myConnection = require('express-myconnection'),
    app = express()

const { urlencoded } = require('express')
//importing routes
const customerRoutes = require('./routes/customer')

//settings (configurar express)
app
    .set('port', process.env.PORT || 3000)
    .set('view engine', 'ejs')
    .set('views', path.join(__dirname, 'views'))

//middlewares
app 
    .use(morgan('dev'))
    .use(myConnection(mysql, {
        host: 'localhost',
        user: 'root',
        password: 'osadia12',
        port: 3306,
        database: 'faztcrudmysql',
    }, 'single'))
    .use(express.urlencoded({extended: false}))

//routes
app.use('/', customerRoutes)

//static files
app.use(express.static(path.join(__dirname, 'public')))


// starting server
app.listen(app.get('port'), () => {
    console.log('Server on port 3000')
})