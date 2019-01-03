const React = require('react')
const { pagesURL } = require('../../../config/')
import homeIcon from '../../assets/002-home2.svg';

const Nav = () => {
	return (
		<div>
			<a href={pagesURL.home}><img src={homeIcon} /></a>
			<span>{' | '}</span>
			<a href={pagesURL.search}>search</a>
		</div>
	);
}

module.exports = Nav;