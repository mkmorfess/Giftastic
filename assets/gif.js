$(document).ready(function(){

	var topics = ["People", "Animals", "Garden", "Games"];


	for (var i = 0; i < topics.length; i++) {

		$(".button").append("<button id='" + topics[i] + "' class='btn btn-primary click'>" + topics[i] + "</button>")
	
	$("#" + topics[i]).on("click", function() {

				console.log("its working!")


			});

	};

	$("#form").submit(function(event) {
		event.preventDefault();
		var selection = $("#input").val()
		topics.push(selection)

		topics.forEach(function(i, idx, array) {

			if (idx === array.length - 1) {
				
			$(".button").append("<button id='" + i + "' class='btn btn-primary click'>" + i + "</button>")

				$("#" + i).on("click", function() {

				console.log("its working!")

			})
			};
			
		});
	});

// $("#" + topics[i]).on("click", function() {

// 				console.log("its working!")


// 			});

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