const React = require('react')
const Nav = require('../../components/Nav/Nav.js')
const Card = require('../../components/Card/Card.js')
const { Container } = require('../../components/Layout/')

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
				<Container>
					<Card>
						<p>{this.state.text}</p>
					</Card>
				</Container>
			</div>
		);
	}
}

module.exports = Search;