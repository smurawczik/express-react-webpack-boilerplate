module.exports = (data) => {
	return data ? `<script>
    window.__INITIAL__ = ${data ? JSON.stringify(data) : JSON.stringify({})}
  </script>` : '';
}