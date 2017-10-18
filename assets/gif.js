$(document).ready(function(){

	var topics = ["People", "Animals", "Garden", "Games"];


	for (var i = 0; i < topics.length; i++) {

		$(".button").append("<button class='btn btn-primary click'>" + topics[i] + "</button>")
	
	$(".click").on("click", function() {

				alert("Brooks a bitch")


			});

	};

	$("#form").submit(function(event) {
		event.preventDefault();
		var selection = $("#input").val()
		topics.push(selection)

		topics.forEach(function(i, idx, array) {

			if (idx === array.length - 1) {
				
			$(".button").append("<button class='btn btn-primary click'>" + i + "</button>")

			console.log(topics)

				$(".click").on("click", function() {

				alert("Brooks a bitch")


			})
			};
			
		});
	});

// var url = "api.giphy.com/v1/gifs/search?api_key=lv3qfDrkQTRe2crwKMOu3a11pwpDGlVy&limit=9&q="

// for (var i = 0; i < topics.length; i++) {
// $.ajax({
// 	url: url + topics[i],
// 	method: "GET"
// }).done(function(response){
// 	console.log(response)
// })

// }
});