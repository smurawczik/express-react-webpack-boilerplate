const React = require('react');

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
				<a href="/" id="link">return</a>
				<p>{this.state.text}</p>
			</div>
		);
	}
}

module.exports = Search;