const React = require('react')
const classnames = require('classnames')

const Column = (props) => {
	const classes = classnames('layout', {
		'layout--column': true,
		'layout--justify-start': props.justifyStart,
		'layout--justify-end': props.justifyEnd,
		'layout--justify-center': props.justifyCenter,
		'layout--justify-space-between': props.justifySpaceBetween,
		'layout--justify-space-around': props.justifySpaceAround,
		'layout--justify-space-evenly': props.justifySpaceEvenly,
		'layout--align-start': props.alignStart,
		'layout--align-end': props.alignEnd,
		'layout--align-center': props.alignCenter,
		'layout--align-baseline': props.alignBaseline,
		'layout--align-stretch': props.alignStretch,
		'layout--stretch': props.stretchChildren,
	})

	return (
		<div className={classes}>
			{props.children}
		</div>
	);
}

module.exports = Column;