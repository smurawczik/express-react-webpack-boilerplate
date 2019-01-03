const React = require('react')
const Nav = require('../../components/nav/Nav.js')
const Card = require('../../components/card/Card.js')

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
				<Card><span onClick={this.click}>APP</span></Card>
			</div>
		);
	}
}

module.exports = Home;