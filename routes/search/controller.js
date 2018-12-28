const React = require('react')
const ReactDOMServer = require('react-dom/server')
const Search = require('../../app/pages/search/Search')
const template = require('../../views/main')
const { getRandomFacts } = require('../../api/random.facts')

exports.render = (req, res, next) => {
  getRandomFacts().then(response => {
    const container = ReactDOMServer.renderToString(<Search text={response.data.text} />)
    res.send(template({container, data: response.data, scripts: ['scripts/page1.bundle.js']}));
  }).catch(() => {
  	throw new Error({status: 404});
	})
}
