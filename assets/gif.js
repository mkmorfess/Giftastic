$(document).ready(function(){

var topics = ["People", "Animals", "Garden", "Games"];

function initialButtons() {

$("#button").empty();



	for (var i = 0; i < topics.length; i++) {

		var button = $("<button>");
		button.addClass("btn btn-primary click");
		button.attr("data-name", topics[i]);
		button.text(topics[i]);
		$("#button").append(button);

	};

};

	$("#form").submit(function(event) {
		event.preventDefault();
		var selection = $("#input").val().trim()
		topics.push(selection)
		console.log(topics)

		initialButtons();
	});

	$(".click").on("click", function() {

				console.log("It's working!")


			})


	function displayGif() {

        var gif = $(this).attr("data-name");
        var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=lv3qfDrkQTRe2crwKMOu3a11pwpDGlVy&limit=9&q=" + topics;

        $.ajax({
          url: queryURL,
          method: "GET"
        }).done(function(response) {

        	// console.log(response)

        	for (var i = 0; i < 9; i++) {

        		console.log(response.data)

          $("#gifs").text(JSON.stringify(response.data.i.url));

      }
          initialButtons();
        });
      }



$(document).on("click", ".click", displayGif);

	initialButtons();

// var url = "https://api.giphy.com/v1/gifs/search?api_key=lv3qfDrkQTRe2crwKMOu3a11pwpDGlVy&limit=9&q="

// for (var i = 0; i < topics.length; i++) {
// $.ajax({
// 	url: url + topics[i],
// 	method: "GET"
// }).done(function(response){
// 	console.log(response)
// })

// }
});