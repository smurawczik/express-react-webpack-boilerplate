const React = require('react')
const ReactDOMServer = require('react-dom/server')
const Home = require('../../app/pages/home/Home')
const template = require('../../views/main')

exports.render = (req, res, next) => {
  const container = ReactDOMServer.renderToString(<Home />)
  res.send(template({container, scripts: ['app']}));
}
