var axios = require('axios');

var apiKey = "059dc98209a841afa64b4c2e2988a613";

var helpers = {

	runQuery: function(topic){ 

		console.log(topic);

		var queryURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=' + apiKey +'&q='+ topic;

		return axios.get(queryURL)
			.then(function(response){

				console.log("check" + response);

		})

	},

	getHistory: function(){

		return axios.get('/api')
			.then(function(response){

				console.log(response);
				return response;
			});
	},

	postHistory: function(topic){

		return axios.post('/api', {topic: topic})
			.then(function(results){

				console.log("Posted to MongoDB");
				return(results);
			})
	}

}

module.exports = helpers;