const React = require('react')
const { pages } = require('../../../config/')

const Nav = (props) => {
	const pagesKeys = Object.keys(pages);
	const currentPath = props.path;

	return (
		<div className='navigation'>
			{
				pagesKeys.map((key, i)  => {
					const pipe = i < pagesKeys.length - 1 ? " | " : null;
					return <a key={i} className={`navigation-link ${currentPath === pages[key].path ? 'navigation-link--active' : ''}`} href={pages[key].path}>{pages[key].text}</a>
				})
			}
		</div>
	);
}

module.exports = Nav;