const React = require('react')
const classnames = require('classnames')

class Table extends React.Component {
	render() {
		const { bordered, selectable } = this.props;

		const classes = classnames('table', {
			'table-bordered': bordered,
		})

		return (
			<table className={classes}>
				{this.props.children}
			</table>
		);
	}
}

module.exports = Table;