const express = require('express')
const router = express.Router()
const controller = require('./controller')

router.get('/page1', controller.render);

module.exports = router;
