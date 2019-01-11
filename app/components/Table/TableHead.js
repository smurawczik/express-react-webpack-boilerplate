const React = require('react')
const classnames = require('classnames')

class TableHead extends React.Component {
	render() {
		const classes = classnames('table-head')

		return (
			<thead className={classes}>
				{this.props.children}
			</thead>
		);
	}
}

module.exports = TableHead;