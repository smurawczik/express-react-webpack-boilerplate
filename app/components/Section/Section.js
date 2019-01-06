const React = require('react')
const classnames = require('classnames')

const Section = (props) => {
	const classes = classnames('section', {
		'section--padding': props.padding,
		'section--width-padding': props.widthPadding,
		'section--height-padding': props.heightPadding,
	})

	return (
		<section className={classes}>
			{props.children}
		</section>
	);
}

module.exports = Section;