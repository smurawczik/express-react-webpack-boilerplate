const React = require('react')
const classnames = require('classnames')

const Button = (props) => {
	const classes = classnames('button', {
		'button--primary': props.primary,
		'button--raised': props.raised,
		'button--secondary': props.secondary,
		'button--outline': props.outline,
		'button--text': props.text,
	})

	const bubbleClasses = classnames('button--ripple')

	return (
		<button className={classes}>
			{props.children}
			<span className={bubbleClasses}></span>
		</button>
	);
}

module.exports = Button;