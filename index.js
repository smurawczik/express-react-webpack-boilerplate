const express = require('express')
const ReactDOMServer = require('react-dom/server')
const React = require('react')
const homeRoutes = require('./routes/home');
const randomFactRoutes = require('./routes/random-fact');
const app = express()
const port = 4400;

app.use(express.static('build'))

app.use(homeRoutes)
app.use(randomFactRoutes)

app.use((err, req, res, next) => {
	console.log(err);
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.send(JSON.stringify(err));
});

app.listen(port, () => console.log(`Example app listening on  ${port}!`))
