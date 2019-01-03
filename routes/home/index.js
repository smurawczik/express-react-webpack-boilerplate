const express = require('express')
const router = express.Router()
const controller = require('./controller')
const { pages } = require('../../config/')

router.get(`${pages.home.path}`, controller.render);

module.exports = router;
