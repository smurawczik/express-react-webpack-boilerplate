const React = require('react')
const classnames = require('classnames')

class TableBody extends React.Component {
	render() {
		const classes = classnames('table-body')

		return (
			<tbody className={classes}>
				{this.props.children}
			</tbody>
		);
	}
}

module.exports = TableBody;