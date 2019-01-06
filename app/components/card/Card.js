const React = require('react')
const classnames = require('classnames')

const Card = (props) => {
	const classes = classnames('card', {
		'card--bordered-primary': props.borderedPrimary,
		'card--bordered-secondary': props.borderedSecondary,
		'card--hover': props.hover
	})

	return (
		<div className={classes}>
			{props.children}
		</div>
	);
}

module.exports = Card;