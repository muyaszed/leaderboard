var React = require('React');
var ReactDOM = require('ReactDOM');

var MyComponent = React.createClass() {
	render: function() {
		<h1>Hello World</h1>
	}
};


ReactDOM.render(
	<MyComponent />, 
	document.getElementById('app')
);