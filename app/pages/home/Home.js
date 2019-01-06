const React = require('react')
const Nav = require('../../components/Nav/Nav.js')
const Card = require('../../components/Card/Card.js')
const Section = require('../../components/Section/Section.js')
const Button = require('../../components/Button/Button.js')
const List = require('../../components/List/List.js')
const { Input } = require('../../components/Form/')
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
						<span>Card</span>
						<Section heightPadding>
							<Button primary> primary </Button>
							<Button secondary raised> secondary raised </Button>
						</Section>
						<Section heightPadding>
							<Input id='some-id' label='label' />
						</Section>
					</Card>
					<Section heightPadding>
						<Button secondary> secondary </Button>
						<Button primary outline> primary outline </Button>
						<Button secondary outline> secondary outline </Button>
						<Button primary text> primary text </Button>
						<Button secondary text> secondary text </Button>
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