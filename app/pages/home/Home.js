const React = require('react')
const Nav = require('../../components/Nav/Nav.js')
const Card = require('../../components/Card/Card.js')
const Section = require('../../components/Section/Section.js')
const Button = require('../../components/Button/Button.js')
const List = require('../../components/List/List.js')
const ListItem = require('../../components/List/ListItem.js')

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
				<Section padding>
					<Card borderedSecondary>
						<Section heightPadding>
							<Button primary> app </Button>
						</Section>
						<Section heightPadding>
							<Button secondary> app </Button>
						</Section>
						<Section heightPadding>
							<Button primary rounded> app </Button>
						</Section>
						<Section heightPadding>
							<Button secondary small> app </Button>
						</Section>
						<Section heightPadding>
							<Button primary large> app </Button>
						</Section>
					</Card>
					<List selectable>
						<ListItem>1</ListItem>
						<ListItem>2</ListItem>
						<ListItem>3</ListItem>
						<ListItem>4</ListItem>
					</List>
				</Section>
			</div>
		);
	}
}

module.exports = Home;