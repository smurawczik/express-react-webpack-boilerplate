const React = require('react')
const classnames = require('classnames')

class Table extends React.Component {
	render() {
		const classes = classnames('table', {
			'table-bordered': this.props.bordered,
			'table-selectable': this.props.selectable,
		})

		return (
			<table className={classes}>
				{this.props.children}
			</table>
		);
	}
}

module.exports = Table;