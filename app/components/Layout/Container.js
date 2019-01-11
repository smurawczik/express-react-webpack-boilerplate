const React = require('react')
const classnames = require('classnames')

const Container = (props) => {
	const classes = classnames('container', {
		'container--liquid': props.liquid,
	})

	return (
		<div className={classes}>
			{props.children}
		</div>
	);
}

module.exports = Container;