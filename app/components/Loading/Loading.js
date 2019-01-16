const React = require('react')
const classnames = require('classnames')

const Loading = (props) => {
	const classes = classnames('loading', {
		'loading--circular': props.circular,
		'loading--small': props.small,
		'loading--large': props.large,
		'loading--shadow': props.shadow,
		'loading--indeterminate': props.indeterminate,
	})

	let loadingProgressProps = {
		className: 'loading--progress',
	}

	if (!props.indeterminate) {
		loadingProgressProps = Object.assign(loadingProgressProps, { style: {width: (props.progress || 0) + '%'}});
	}

	return (
		<div className={classes}>
			{
				props.circular
				?
				<svg className="loading--circular--svg"viewBox="25 25 50 50" >
		      <circle className="loading--path--svg" cx="50" cy="50" r="20" fill="none" stroke="#70c542" strokeWidth="3" />
		    </svg>
		    :
		    <div className='loading--background'>
		    	<div {...loadingProgressProps}></div>
		    </div>
			}
		</div>
	);
}

module.exports = Loading;