const React = require('react')
const classnames = require('classnames')

class List extends React.Component {
	constructor(props) {
		super(props);

		this.onListItemClick = this.onListItemClick.bind(this);
	}

	onListItemClick(e, index) {
		const { onListItemClick } = this.props;

		console.warn(e.target, index);

		onListItemClick && onListItemClick(e);
	}

	render() {
		const classes = classnames('list', {
			'list--selectable': this.props.selectable
		})

		return (
			<ul className={classes}>
				{
					React.Children.map(this.props.children, (child, i) => {
						return <child.type index={i} onListItemClick={this.onListItemClick} {...child.props}>{child.props.children}</child.type>
					})
				}
			</ul>
		);
	}
}

module.exports = List;