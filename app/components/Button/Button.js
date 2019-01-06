const React = require('react')
const classnames = require('classnames')

const Button = (props) => {
	const classes = classnames('button', {
		'button--primary': props.primary,
		'button--secondary': props.secondary,
		'button--rounded': props.rounded,
		'button--small': props.small,
		'button--large': props.large,
	})

	return (
		<button className={classes}>
			{props.children}
		</button>
	);
}

module.exports = Button;