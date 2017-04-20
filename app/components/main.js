var React = require('react');

var Search = require('./children/search');
var Results = require('./children/results');
var History = require('./children/savedarticles');

var helpers = require('./utils/helpers.js');

var main = React.createClass({

	getInitialState: function(){
		return {
			topic: "",
			startyear: 0,
			endyear: 0,
			results: [],
			saved: []
		}
	},	

	setTopic: function(term){
		this.setState({
			topic: term
		})
	},

	setStart: function(term){
		this.setState({
			startyear: term
		})
	},

	setEnd: function(term){
		this.setState({
			endyear: term
		})
	},
 
	componentDidUpdate: function(prevProps, prevState){

		if(prevState.topic != this.state.topic){
			console.log("UPDATED");

			helpers.runQuery(this.state.topic)
				.then(function(data){
					if (data != this.state.saved)
					{
						console.log("Address", data);

						this.setState({
							results: data
						})
 
						helpers.postHistory(this.state.topic)
							.then(function(data){
								console.log("Updated!");

								helpers.getHistory()
									.then(function(response){
										console.log("Current History", response.data);
										if (response != this.state.saved){
											console.log ("History", response.data);

											this.setState({
												saved: response.data
											})
										}
									}.bind(this))	
							}.bind(this)
						)
					}
				}.bind(this))
				
			}
	},

	componentDidMount: function(){

		helpers.getHistory()
			.then(function(response){
				if (response != this.state.saved){
					console.log ("History", response.data);

					this.setState({
						saved: response.data
					})
				}
			}.bind(this))
	},

	render: function(){

		return(

		<div className="container">

				<div className="row">

					<div className="jumbotron">
						<h2 className="text-center">New York Times Article Scrubber!</h2>
						<p className="text-center"><em>Search for articles of your interest!</em></p>
					</div>

				</div>


				<div className="row">
						
					<Search setTopic={this.setTopic}/>	

				</div>

				<div className="row">
						
					<Results />	

				</div>

				<div className="row">
						
					<History />	

				</div>

		</div>


			
		)
	}
});

module.exports = main;