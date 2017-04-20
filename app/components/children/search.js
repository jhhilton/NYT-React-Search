var React = require('react');

var search = React.createClass({

	getInitialState: function(){
		return {
			searchTerm: "",
			startYear: "",
			endYear: ""
		}
	},	

	handleChangeTerm: function(event){

    
    	var newState = {};
    	newState[event.target.id] = event.target.value;
    	this.setState(newState);

	},

	handleChangeStartYear: function(event){


    	var newState = {};
    	newState[event.target.id] = event.target.value;
    	this.setState(newState);

	},

	handleChangeEndYear: function(event){


    	var newState = {};
    	newState[event.target.id] = event.target.value;
    	this.setState(newState);

	},

	handleClick: function(){

		console.log("CLICK");
		console.log(this.state.term);

		this.props.setTopic(this.state.searchTerm);

	},

	render: function(){

		return(
			<div className="jumbotron">

						<form>
							<div className="form-group">
								<h4 className=""><strong>Topic</strong></h4>


								<input type="text" className="form-control text-center" id="searchTerm" onChange= {this.handleChangeTerm} required/>
								<br />
								<h4 className=""><strong>Start Year</strong></h4>


								<input type="text" className="form-control text-center" id="startYear" onChange= {this.handleChangeStartYear} required/>
								<br />
								<h4 className=""><strong>End Year</strong></h4>


								<input type="text" className="form-control text-center" id="endYear" onChange= {this.handleChangeEndYear} required/>
								<br />
								<button type="button" className="btn btn-primary" onClick={this.handleClick}>Submit</button>
							</div>

						</form>
			</div>

		)
	}
});

module.exports = search;