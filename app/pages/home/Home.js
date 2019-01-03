const React = require('react')
const Nav = require('../../components/nav/Nav.js')

class Home extends React.Component {
	constructor(props) {
		super(props);

		this.click = this.click.bind(this);
	}

	click() {
		alert('click');
	}

	render() {
		return (
			<div>
				<Nav path={this.props.path} />
				<span onClick={this.click}>APP</span>
			</div>
		);
	}
}

module.exports = Home;