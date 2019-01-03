const React = require('react')
const { pages } = require('../../../config/')

const Card = (props) => {
	return (
		<div className='card'>
			{props.children}
		</div>
	);
}

module.exports = Card;