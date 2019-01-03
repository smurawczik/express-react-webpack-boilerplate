const React = require('react')
const { pages } = require('../../../config/')

const Nav = () => {
	const pagesKeys = Object.keys(pages);

	return (
		<div className='navigation'>
			{
				pagesKeys.map((key, i)  => {
					const pipe = i < pagesKeys.length - 1 ? " | " : null;
					return <a key={i} className='navigation-link' href={pages[key].path}>{pages[key].text}</a>
				})
			}
		</div>
	);
}

module.exports = Nav;