import './Home.scss';
const React = require('react');
const ReactDOM = require('react-dom');
const Home = require('./Home');

ReactDOM.hydrate(<Home path={window.__PATH__} />, document.getElementById('root'));