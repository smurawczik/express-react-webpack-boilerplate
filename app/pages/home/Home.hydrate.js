import './Home.scss';
const React = require('react');
const ReactDOM = require('react-dom');
const Home = require('./Home');

ReactDOM.hydrate(<Home />, document.getElementById('root'));