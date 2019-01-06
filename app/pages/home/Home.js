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
					<Card borderedSecondary>Card</Card>
					<Section heightPadding>
						<Button primary> primary </Button>
					</Section>
					<Section heightPadding>
						<Button secondary> secondary </Button>
					</Section>
					<Section heightPadding>
						<Button primary rounded> primary rounded </Button>
					</Section>
					<Section heightPadding>
						<Button secondary small> secondary small </Button>
					</Section>
					<Section heightPadding>
						<Button primary large> primary large </Button>
					</Section>
					<Section>
						<List>
							<ListItem>1</ListItem>
							<ListItem>2</ListItem>
						</List>
						<List selectable>
							<ListItem>1</ListItem>
							<ListItem>2</ListItem>
						</List>
					</Section>
				</Section>
			</div>
		);
	}
}

module.exports = Home;