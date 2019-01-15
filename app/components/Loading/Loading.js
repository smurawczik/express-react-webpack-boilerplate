const React = require('react')
const classnames = require('classnames')

const Loading = (props) => {
	const classes = classnames('loading', {
		'loading-circular': props.circular,
		'loading-circular-small': props.small,
		'loading-circular-large': props.large,
	})

	return (
		<div className={classes}>
			{
				props.circular
				?
				<svg className="loading-circular-svg"viewBox="25 25 50 50" >
		      <circle className="loading-path-svg" cx="50" cy="50" r="20" fill="none" stroke="#70c542" strokeWidth="3" />
		    </svg>
		    :
		    <div className='loading-background'>
		    	<div className='loading-progress' style={{width: (props.progress || 0) + '%'}}></div>
		    </div>
			}
		</div>
	);
}

module.exports = Loading;