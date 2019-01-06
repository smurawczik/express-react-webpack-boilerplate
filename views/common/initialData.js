module.exports = (data, req) => {
	return `<script>
	${req ? 'window.__PATH__ = ' + JSON.stringify(req.path) + ';' : ''}
	${data ? 'window.__INITIAL__ = ' + JSON.stringify(data) + ';' : ''}
  </script>`;
}