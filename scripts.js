var search = document.getElementById('search')
submit = document.getElementById('select-cocktail')
mealsEl = document.getElementById('meals')
var searchterms = $('#getMeals').val();

// Search Meal API
var settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://themealdb.p.rapidapi.com/search.php?s=" + searchterms,
	"method": "GET",
	"datatype": JSON,
	"headers": {
		"x-rapidapi-host": "themealdb.p.rapidapi.com",
		"x-rapidapi-key": "fd0272f893msh544cb18b3f99e1ap1160dfjsn4872df7aba39"
	}
}


$(document).ready(function () {
	$.ajax(settings).then(function (response) {
		console.log(response);
	});
});

// Event Listener
submit.addEventListener('submit', search)