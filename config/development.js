exports.baseConfig = {
	basePath: '',
}

exports.catFactsConfig = {
	basePath: 'https://cat-fact.herokuapp.com',
	randomFactsPath: '/facts/random'
}

exports.pages = {
	home: {
		path: '/',
		text: 'Home'
	},
	randomFact: {
		path: '/random-fact',
		text: 'Random Fact'
	}
}