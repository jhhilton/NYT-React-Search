var React = require('react');
 
var history = React.createClass({

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

				<div className="panel panel-default">
  					<div className="panel-heading">
    					<h3 className="panel-title"><strong>History</strong></h3>
  					</div>
  					<div className="panel-body">
    					
  					</div>
				</div>
				

			</div>

		)
	}
});

module.exports = history;