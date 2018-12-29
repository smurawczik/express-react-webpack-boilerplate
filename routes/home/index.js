const express = require('express')
const router = express.Router()
const controller = require('./controller')
const { pagesURL } = require('../../config/')

router.get(`${pagesURL.home}`, controller.render);

module.exports = router;
