const React = require('react')
const { pagesURL } = require('../../../config/')

const Nav = () => {
	return (
		<div>
			<a href={pagesURL.home}>home</a>
			<span>{' | '}</span>
			<a href={pagesURL.search}>search</a>
		</div>
	);
}

module.exports = Nav;