const axios = require('axios')
const { catFactsConfig } = require('../config/')

exports.getRandomFacts = () => axios.get(catFactsConfig.basePath + catFactsConfig.randomFactsPath)