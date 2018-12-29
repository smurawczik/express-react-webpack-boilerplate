const express = require('express')
const router = express.Router()
const controller = require('./controller')
const { pagesURL } = require('../../config/')

router.get(`${pagesURL.search}`, controller.render);

module.exports = router;
