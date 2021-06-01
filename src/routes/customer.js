const express = require('express'),
    router = express.Router()
    
const customerController = require('../controllers/customerController')

router
    .get('/', customerController.list)
    .post('/add', customerController.save)
    .get('/delete/:id', customerController.delete)
    .get('/update/:id', customerController.edit)
    .post('/update/:id', customerController.update)

module.exports = router