const React = require('react')
const classnames = require('classnames')

class TableHeadData extends React.Component {
	render() {
		const classes = classnames('table-head-data')

		return (
			<th className={classes}>
				{this.props.children}
			</th>
		);
	}
}

module.exports = TableHeadData;