$(document).ready(function(){

var topics = ["Redskins", "Capitals", "Wizards", "Nationals"];

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
        var queryURL = "https://api.giphy.com/v1/gifs/search?limit=9&rating=g&q=" + gif + "&api_key=lv3qfDrkQTRe2crwKMOu3a11pwpDGlVy";

        $.ajax({
          url: queryURL,
          method: "GET"
        }).done(function(response) {

        	 console.log(response)

        	for (var i = 0; i < response.data.length; i++) {

        		var image = $("<img>")
        		image.addClass("col-md-6")
        		image.attr("src", response.data[i].images.fixed_height_still.url)
        		image.attr("data-still", response.data[i].images.fixed_height_still.url)
        		image.attr("data-animate", response.data[i].images.fixed_height.url)
        		image.attr("style", "width:300px; height:300px")

	        		
        			$('#gifs').append(image);
	                }

          initialButtons();
        });
      }



$(document).on("click", ".click", displayGif);

	initialButtons();

});