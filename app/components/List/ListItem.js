const React = require('react')
const classnames = require('classnames')

class ListItem extends React.Component {
	constructor(props) {
		super(props);

		this.itemClick = this.itemClick.bind(this);
	}

	itemClick(e) {
		const { onListItemClick, index } = this.props;

		onListItemClick && onListItemClick(e, index);
	}

	render() {
		const classes = classnames('list-item')

		return (
			<li className={classes} onClick={this.itemClick}>
				{this.props.children}
			</li>
		);
	}
}

module.exports = ListItem;