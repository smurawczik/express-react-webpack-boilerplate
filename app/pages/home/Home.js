const React = require('react')
const Nav = require('../../components/Nav/Nav.js')
const Card = require('../../components/Card/Card.js')
const Button = require('../../components/Button/Button.js')
const List = require('../../components/List/List.js')
const { Table, TableBody, TableRow, TableHead, TableHeadData, TableData } = require('../../components/Table/')
const { Input, Checkbox, Radio } = require('../../components/Form/')
const { Container, Row, Column } = require('../../components/Layout/')
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
				<Container>
					<Table>
						<TableHead>
							<TableRow>
								<TableHeadData>head 1</TableHeadData>
								<TableHeadData>head 2</TableHeadData>
								<TableHeadData>head 3</TableHeadData>
							</TableRow>
						</TableHead>
						<TableBody>
							<TableRow>
								<TableData>data 1</TableData>
								<TableData>data 2</TableData>
								<TableData>data 3</TableData>
							</TableRow>
							<TableRow>
								<TableData>data 1</TableData>
								<TableData>data 2</TableData>
								<TableData>data 3</TableData>
							</TableRow>
						</TableBody>
					</Table>
				</Container>
				<Container>
					<Table bordered>
						<TableHead>
							<TableRow>
								<TableHeadData>head 1</TableHeadData>
								<TableHeadData>head 2</TableHeadData>
								<TableHeadData>head 3</TableHeadData>
							</TableRow>
						</TableHead>
						<TableBody>
							<TableRow>
								<TableData>data 1</TableData>
								<TableData>data 2</TableData>
								<TableData>data 3</TableData>
							</TableRow>
							<TableRow>
								<TableData>data 1</TableData>
								<TableData>data 2</TableData>
								<TableData>data 3</TableData>
							</TableRow>
						</TableBody>
					</Table>
				</Container>
				<Container>
					<Card borderedSecondary>
						<span>Card</span>
						<Container>
							<Row stretchChildren>
								<Input id='some-id' label='label' />
								<Input id='some-id' label='label' value='some value' />
							</Row>
						</Container>
						<Container>
							<Checkbox id='other' label='label' />
							<Checkbox id='other-2' label='label 2' />
							<Checkbox id='other-3' label='label 3' />
						</Container>
						<Container>
							<Column>
								{'COLUMNS'}
								<Radio name='na1' id='sasa' label='column' />
								<Radio name='na1' id='sasa-2' label='column 2' />
								<Radio name='na1' id='sasa-3' label='column 3' />
							</Column>
							<Row alignCenter>
								{'ROWS '}
								<Radio name='na2' id='sasa-4' label='row 4' />
								<Radio name='na2' id='sasa-5' label='row 5' />
							</Row>
						</Container>
						<Container>
							<Button primary raised> primary raised</Button>
							<Button primary text> secondary text </Button>
						</Container>
					</Card>
					<Container>
						<Button secondary> secondary </Button>
						<Button primary outline> primary outline </Button>
						<Button secondary outline> secondary outline </Button>
						<Button primary text> primary text </Button>
						<Button secondary text> secondary text </Button>
					</Container>
					<Container>
						<List>
							<ListItem>1</ListItem>
							<ListItem>2</ListItem>
						</List>
					</Container>
					<Container>
						<List selectable>
							<ListItem>1</ListItem>
							<ListItem>2</ListItem>
						</List>
					</Container>
				</Container>
			</div>
		);
	}
}

module.exports = Home;