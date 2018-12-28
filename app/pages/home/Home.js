const React = require('react');

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
				<span onClick={this.click}>APP</span>
				<a href="/page1">page1</a>
			</div>
		);
	}
}

module.exports = Home;