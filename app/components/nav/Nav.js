const React = require('react')
const { pagesURL } = require('../../../config/')
import nav from './nav.png';

const Nav = () => {
	return (
		<div>
			<a href={pagesURL.home}>home</a>
			<span>{' | '}</span>
			<a href={pagesURL.search}>search</a>
			<img src={nav} />
		</div>
	);
}

module.exports = Nav;