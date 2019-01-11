const React = require('react')
const classnames = require('classnames')

class TableRow extends React.Component {
	render() {
		const classes = classnames('table-row')

		return (
			<tr className={classes}>
				{this.props.children}
			</tr>
		);
	}
}

module.exports = TableRow;