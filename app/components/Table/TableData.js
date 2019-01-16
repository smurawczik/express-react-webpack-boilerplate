const React = require('react')
const classnames = require('classnames')

class TableData extends React.Component {
	render() {
		const classes = classnames('table-data')

		return (
			<td className={classes} colSpan={this.props.colspan}>
				{this.props.children}
			</td>
		);
	}
}

module.exports = TableData;