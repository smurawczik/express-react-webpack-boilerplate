const React = require('react')
const classnames = require('classnames')

class TableData extends React.Component {
	render() {
		const classes = classnames('table-data')

		return (
			<td className={classes}>
				{this.props.children}
			</td>
		);
	}
}

module.exports = TableData;