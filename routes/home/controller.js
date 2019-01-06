const React = require('react')
const ReactDOMServer = require('react-dom/server')
const Home = require('../../app/pages/home/Home')
const template = require('../../views/main')

exports.render = (req, res, next) => {
  const container = ReactDOMServer.renderToString(<Home path={req.path} />)
  res.send(template({container, title: 'home', request: req, bundle: ['app']}));
}
