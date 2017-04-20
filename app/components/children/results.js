var React = require('react');

var results = React.createClass({

	getInitialState: function(){
		return {
			searchTerm: "",
			results: "",
			history: [] 
		}
	},	

	setTerm: function(term){
		this.setState({
			searchTerm: term
		})
	},

	render: function(){

		return(
			<div className="jumbotron">

				

			</div>

		)
	}
});

module.exports = results;