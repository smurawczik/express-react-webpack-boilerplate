const React = require('react')
const classnames = require('classnames')
const { pages } = require('../../../config/')

const Nav = (props) => {
	const pagesKeys = Object.keys(pages);
	const currentPath = props.path;

	const classes = classnames('navigation')

	const linkClasses = classnames('navigation-link')

	return (
		<div className={classes}>
			{
				pagesKeys.map((key, i)  => {
					const pipe = i < pagesKeys.length - 1 ? " | " : null;
					return <a key={i} className={`${linkClasses} ${currentPath === pages[key].path ? linkClasses + '--active' : ''}`} href={pages[key].path}>{pages[key].text}</a>
				})
			}
		</div>
	);
}

module.exports = Nav;