const React = require('react')
const Nav = require('../../components/nav/Nav.js')

class Search extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			text: props.text || null,
		}
	}

	render() {
		return (
			<div id="main">
				<Nav path={this.props.path} />
				<p>{this.state.text}</p>
			</div>
		);
	}
}

module.exports = Search;